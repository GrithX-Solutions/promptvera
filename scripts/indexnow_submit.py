#!/usr/bin/env python3
import argparse
import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

DEFAULT_HOST = "promptvera.com"
DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow"
DEFAULT_KEY_FILE = Path(__file__).resolve().parents[1] / "public" / "3f3d48d3c464f0f10960346479e18c2e.txt"


def load_key(path: Path) -> str:
    key = path.read_text(encoding="utf-8").strip()
    if not (8 <= len(key) <= 128):
        raise ValueError("IndexNow key must be 8-128 characters")
    if not all(ch.isalnum() or ch == "-" for ch in key):
        raise ValueError("IndexNow key contains unsupported characters")
    return key


def sitemap_urls(host: str) -> list[str]:
    request = urllib.request.Request(
        f"https://{host}/sitemap.xml",
        headers={"User-Agent": "PromptVera-IndexNow/1.0"},
    )
    with urllib.request.urlopen(request, timeout=20) as response:
        data = response.read()

    root = ET.fromstring(data)
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [
        node.text.strip()
        for node in root.findall("sm:url/sm:loc", namespace)
        if node.text and node.text.strip()
    ]
    return urls


def validate_urls(urls: list[str], host: str) -> list[str]:
    prefix = f"https://{host}"
    cleaned: list[str] = []
    seen: set[str] = set()
    for url in urls:
        url = url.strip()
        if not url:
            continue
        if not (url == prefix or url.startswith(prefix + "/")):
            raise ValueError(f"URL is outside {host}: {url}")
        if url not in seen:
            cleaned.append(url)
            seen.add(url)
    if len(cleaned) > 10000:
        raise ValueError("IndexNow supports at most 10,000 URLs per request")
    return cleaned


def submit(endpoint: str, host: str, key: str, urls: list[str]) -> int:
    payload = {
        "host": host,
        "key": key,
        "keyLocation": f"https://{host}/{key}.txt",
        "urlList": urls,
    }
    request = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "PromptVera-IndexNow/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            code = response.getcode()
            print(f"IndexNow HTTP {code}: submitted {len(urls)} URL(s)")
            return 0 if code in (200, 202) else 1
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        print(f"IndexNow HTTP {exc.code}: {body}", file=sys.stderr)
        return 0 if exc.code in (200, 202) else 1


def main() -> int:
    parser = argparse.ArgumentParser(description="Submit PromptVera URLs to IndexNow")
    parser.add_argument("urls", nargs="*", help="Full PromptVera URLs. If omitted, submit sitemap URLs.")
    parser.add_argument("--host", default=DEFAULT_HOST)
    parser.add_argument("--endpoint", default=DEFAULT_ENDPOINT)
    parser.add_argument("--key-file", type=Path, default=DEFAULT_KEY_FILE)
    args = parser.parse_args()

    key = load_key(args.key_file)
    urls = args.urls or sitemap_urls(args.host)
    urls = validate_urls(urls, args.host)
    if not urls:
        print("No URLs to submit")
        return 0
    return submit(args.endpoint, args.host, key, urls)


if __name__ == "__main__":
    raise SystemExit(main())
