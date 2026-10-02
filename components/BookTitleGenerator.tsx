"use client";

import { useMemo, useState } from "react";

const fictionGenres = [
  "Fantasy",
  "Romance",
  "Mystery",
  "Thriller",
  "Horror",
  "Science fiction",
  "Adventure",
  "Historical",
  "Literary",
  "Children's",
];

const nonfictionCategories = [
  "Business",
  "Self-development",
  "Productivity",
  "Technology",
  "Creativity",
  "Health",
  "History",
  "Memoir",
];

const tones = [
  "Balanced",
  "Evocative",
  "Dark",
  "Hopeful",
  "Playful",
  "Elegant",
  "Bold",
];

const styles = [
  "Mixed",
  "Short & punchy",
  "Evocative",
  "Classic",
  "Descriptive",
  "Title + subtitle",
];

const fictionWords: Record<string, { nouns: string[]; places: string[]; modifiers: string[] }> = {
  Fantasy: {
    nouns: ["Crown", "Ember", "Kingdom", "Oath", "Throne", "Rune", "Dragon", "Heir", "Veil", "Sword"],
    places: ["Ashfall", "the Hollow Realm", "the Last Kingdom", "Moonspire", "the Glass Citadel", "the Northern Gate"],
    modifiers: ["Broken", "Hidden", "Last", "Silver", "Forgotten", "Burning", "Hollow", "Starless"],
  },
  Romance: {
    nouns: ["Promise", "Summer", "Letter", "Chance", "Distance", "Heart", "Season", "Secret", "Home", "Meeting"],
    places: ["the Coast", "Rose Street", "the Last Train", "the Summer House", "the City Lights", "the Bookshop"],
    modifiers: ["Second", "Unexpected", "Quiet", "Last", "Almost", "Secret", "Perfect", "Unwritten"],
  },
  Mystery: {
    nouns: ["Clue", "Witness", "Room", "Letter", "Alibi", "Case", "Key", "Silence", "Name", "House"],
    places: ["Blackwood House", "the Locked Room", "the Old Station", "Marrow Lane", "the Empty Hotel", "the Archive"],
    modifiers: ["Missing", "Silent", "Final", "Hidden", "False", "Unmarked", "Last", "Unknown"],
  },
  Thriller: {
    nouns: ["Deadline", "Signal", "Target", "Witness", "Protocol", "Exit", "File", "Hour", "Network", "Border"],
    places: ["the Safe House", "the Red Line", "the Last Flight", "the Closed City", "the North Tower", "the Dead Zone"],
    modifiers: ["Final", "Silent", "Cold", "Hidden", "Zero", "Last", "False", "Dark"],
  },
  Horror: {
    nouns: ["House", "Door", "Whisper", "Night", "Guest", "Hollow", "Room", "Shadow", "Bell", "Name"],
    places: ["the Woods", "the Upstairs Room", "Blackwater", "the Empty House", "the Old Road", "the Basement"],
    modifiers: ["Hollow", "Unquiet", "Last", "Empty", "Wrong", "Silent", "Buried", "Pale"],
  },
  "Science fiction": {
    nouns: ["Signal", "Orbit", "Protocol", "Colony", "Archive", "Machine", "Echo", "Station", "Memory", "Vector"],
    places: ["the Outer Ring", "Mars", "the Last Station", "Kepler Nine", "the Silent Colony", "the Far Orbit"],
    modifiers: ["Last", "Quantum", "Silent", "Zero", "Distant", "Synthetic", "Unknown", "Final"],
  },
  Adventure: {
    nouns: ["Map", "Compass", "Voyage", "Expedition", "Island", "Trail", "Treasure", "Passage", "River", "Summit"],
    places: ["the Lost Coast", "the Southern Sea", "the Hidden Valley", "the Last Island", "the High Pass", "the Wild River"],
    modifiers: ["Lost", "Hidden", "Last", "Wild", "Secret", "Golden", "Uncharted", "Forgotten"],
  },
  Historical: {
    nouns: ["Letter", "House", "Daughter", "Winter", "Harbor", "Promise", "Portrait", "War", "Garden", "Inheritance"],
    places: ["the Old Quarter", "the Harbor", "the Manor", "the Eastern Front", "the Walled City", "the Orchard"],
    modifiers: ["Forgotten", "Last", "Secret", "Winter", "Hidden", "Distant", "Unwritten", "Lost"],
  },
  Literary: {
    nouns: ["River", "House", "Names", "Weather", "Distance", "Garden", "Inheritance", "Light", "Memory", "Silence"],
    places: ["the River Road", "the Old House", "the Edge of Town", "the Orchard", "the Long Summer", "the Other Side"],
    modifiers: ["Quiet", "Ordinary", "Distant", "Small", "Long", "Borrowed", "Unfinished", "Familiar"],
  },
  "Children's": {
    nouns: ["Moon", "Dragon", "Garden", "Fox", "Star", "Clock", "Cloud", "Lantern", "Map", "Tree"],
    places: ["the Moon", "the Secret Garden", "Cloud Hill", "the Tiny Kingdom", "the Wishing Woods", "Star Street"],
    modifiers: ["Little", "Brave", "Curious", "Magic", "Secret", "Sleepy", "Wonderful", "Tiny"],
  },
};

const nonfictionSeeds: Record<string, string[]> = {
  Business: ["Leadership", "Strategy", "Teams", "Growth", "Decisions", "Customers", "Execution", "Value"],
  "Self-development": ["Habits", "Confidence", "Focus", "Change", "Resilience", "Purpose", "Boundaries", "Growth"],
  Productivity: ["Focus", "Time", "Systems", "Priorities", "Work", "Attention", "Momentum", "Planning"],
  Technology: ["AI", "Automation", "Software", "Systems", "Data", "Security", "Cloud", "Digital Change"],
  Creativity: ["Ideas", "Practice", "Writing", "Making", "Originality", "Creative Work", "Craft", "Curiosity"],
  Health: ["Sleep", "Movement", "Recovery", "Energy", "Nutrition", "Stress", "Routine", "Wellbeing"],
  History: ["Power", "Trade", "Cities", "Ideas", "Conflict", "Migration", "Memory", "Institutions"],
  Memoir: ["Home", "Change", "Family", "Work", "Belonging", "Recovery", "Distance", "Memory"],
};

const nonfictionDescriptors = [
  "A Practical Guide",
  "A Clearer Way",
  "What Actually Works",
  "Principles for Better Decisions",
  "A Field Guide",
  "A Better System",
  "Lessons for Real Life",
  "How to Build What Lasts",
];

const toneWords: Record<string, string[]> = {
  Balanced: ["Clear", "Open", "True", "New", "Second", "Hidden"],
  Evocative: ["Distant", "Unwritten", "Fading", "Secret", "Wild", "Golden"],
  Dark: ["Black", "Broken", "Hollow", "Cold", "Buried", "Last"],
  Hopeful: ["Bright", "Rising", "Open", "New", "Brave", "Returning"],
  Playful: ["Curious", "Unexpected", "Odd", "Little", "Impossible", "Lucky"],
  Elegant: ["Quiet", "Silver", "Fine", "Graceful", "Still", "Measured"],
  Bold: ["Radical", "Unstoppable", "Powerful", "Brave", "Big", "Defiant"],
};

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function clean(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function titleCase(value: string): string {
  return value
    .split(" ")
    .map((word) => {
      if (!word) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function uniquePush(target: string[], candidate: string) {
  const normalized = candidate.replace(/\s+/g, " ").trim();
  if (normalized && !target.includes(normalized)) target.push(normalized);
}

export function BookTitleGenerator() {
  const [bookType, setBookType] = useState("Fiction");
  const [category, setCategory] = useState("Fantasy");
  const [tone, setTone] = useState("Balanced");
  const [style, setStyle] = useState("Mixed");
  const [keyword, setKeyword] = useState("");
  const [secondaryIdea, setSecondaryIdea] = useState("");
  const [count, setCount] = useState("12");
  const [titles, setTitles] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const categories = useMemo(
    () => (bookType === "Fiction" ? fictionGenres : nonfictionCategories),
    [bookType],
  );

  function changeBookType(value: string) {
    setBookType(value);
    setCategory(value === "Fiction" ? fictionGenres[0] : nonfictionCategories[0]);
    setTitles([]);
  }

  function generateFiction(amount: number): string[] {
    const lexicon = fictionWords[category] ?? fictionWords.Fantasy;
    const anchor = clean(keyword);
    const secondary = clean(secondaryIdea);
    const results: string[] = [];
    let attempts = 0;

    while (results.length < amount && attempts < amount * 20) {
      attempts += 1;
      const noun = pick(lexicon.nouns);
      const place = pick(lexicon.places);
      const modifier = pick([...lexicon.modifiers, ...toneWords[tone]]);
      const anchorTitle = anchor ? titleCase(anchor) : noun;
      const secondTitle = secondary ? titleCase(secondary) : place;
      const patterns = [
        `The ${modifier} ${noun}`,
        `${anchorTitle} of ${place}`,
        `The ${noun} of ${secondTitle}`,
        `Where ${anchorTitle} Meets ${noun}`,
        `${modifier} ${anchorTitle}`,
        `A ${noun} for ${secondTitle}`,
        `Beyond ${place}`,
        `${anchorTitle} and the ${modifier} ${noun}`,
        `The Last ${anchorTitle}`,
        `${place}: A ${anchorTitle} Story`,
      ];

      let candidate: string;
      if (style === "Short & punchy") {
        candidate = pick([
          `${modifier} ${noun}`,
          `The ${noun}`,
          anchor ? anchorTitle : place,
          `Last ${noun}`,
        ]);
      } else if (style === "Evocative") {
        candidate = pick([
          `Where ${anchorTitle} Meets ${noun}`,
          `The ${noun} Beyond ${place}`,
          `When ${place} Goes Quiet`,
          `A ${modifier} ${noun} for ${secondTitle}`,
        ]);
      } else if (style === "Classic") {
        candidate = pick([
          `The ${modifier} ${noun}`,
          `The ${noun} of ${place}`,
          `${anchorTitle} and the ${noun}`,
          `The Last ${noun}`,
        ]);
      } else if (style === "Descriptive") {
        candidate = pick([
          `The ${modifier} ${noun} of ${place}`,
          `${anchorTitle} and the Secret of ${place}`,
          `The ${noun} That Changed ${secondTitle}`,
          `A Story of ${anchorTitle} and ${noun}`,
        ]);
      } else if (style === "Title + subtitle") {
        candidate = pick([
          `${anchorTitle}: A Story of ${noun} and ${place}`,
          `The ${modifier} ${noun}: A ${category} Story`,
          `${place}: A Story of ${anchorTitle}`,
        ]);
      } else {
        candidate = pick(patterns);
      }

      uniquePush(results, candidate);
    }

    return results;
  }

  function generateNonfiction(amount: number): string[] {
    const seed = titleCase(clean(keyword) || pick(nonfictionSeeds[category] ?? nonfictionSeeds.Business));
    const secondary = titleCase(clean(secondaryIdea));
    const results: string[] = [];
    let attempts = 0;

    while (results.length < amount && attempts < amount * 20) {
      attempts += 1;
      const descriptor = pick(nonfictionDescriptors);
      const support = secondary || pick(nonfictionSeeds[category] ?? nonfictionSeeds.Business);
      const modifier = pick(toneWords[tone]);
      const mixed = [
        `${seed}: ${descriptor}`,
        `The ${modifier} Guide to ${seed}`,
        `Beyond ${seed}: ${descriptor}`,
        `${seed} That Works`,
        `Rethinking ${seed}`,
        `${seed} by Design`,
        `The ${seed} Method`,
        `${seed} and ${support}: ${descriptor}`,
        `Better ${seed}: Principles for ${support}`,
        `The Practical ${seed} Handbook`,
      ];

      let candidate: string;
      if (style === "Short & punchy") {
        candidate = pick([
          `Better ${seed}`,
          `Rethinking ${seed}`,
          `${seed} by Design`,
          `The ${seed} Method`,
        ]);
      } else if (style === "Evocative") {
        candidate = pick([
          `Beyond ${seed}`,
          `The ${modifier} Side of ${seed}`,
          `What ${seed} Changes`,
          `The Long View on ${seed}`,
        ]);
      } else if (style === "Classic") {
        candidate = pick([
          `The Guide to ${seed}`,
          `Understanding ${seed}`,
          `The Principles of ${seed}`,
          `${seed}: An Introduction`,
        ]);
      } else if (style === "Descriptive") {
        candidate = pick([
          `How to Improve ${seed} Without Adding Complexity`,
          `A Practical Guide to ${seed} and ${support}`,
          `${seed}: Principles, Systems, and Better Decisions`,
          `Building Better ${seed}: A Field Guide`,
        ]);
      } else if (style === "Title + subtitle") {
        candidate = pick([
          `${seed}: ${descriptor}`,
          `Better ${seed}: A Practical Guide to ${support}`,
          `Rethinking ${seed}: Principles for Better Decisions`,
          `The ${seed} Method: How to Build ${support} That Lasts`,
        ]);
      } else {
        candidate = pick(mixed);
      }

      uniquePush(results, candidate);
    }

    return results;
  }

  function generate() {
    const amount = Number(count);
    const generated =
      bookType === "Fiction" ? generateFiction(amount) : generateNonfiction(amount);
    setTitles(generated);
    setCopied(false);
  }

  async function copyAll() {
    if (!titles.length) return;
    await navigator.clipboard.writeText(
      titles.map((title, index) => `${index + 1}. ${title}`).join("\n"),
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setBookType("Fiction");
    setCategory("Fantasy");
    setTone("Balanced");
    setStyle("Mixed");
    setKeyword("");
    setSecondaryIdea("");
    setCount("12");
    setTitles([]);
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate book title ideas</h2>
            <p>
              Choose the type, genre, tone, and naming style. Add your own
              keyword or theme when you want the titles anchored to a specific idea.
            </p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="book-type">Book type</label>
            <select
              className="select"
              id="book-type"
              value={bookType}
              onChange={(event) => changeBookType(event.target.value)}
            >
              <option>Fiction</option>
              <option>Nonfiction</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="book-category">
              {bookType === "Fiction" ? "Genre" : "Category"}
            </label>
            <select
              className="select"
              id="book-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="book-tone">Tone</label>
            <select
              className="select"
              id="book-tone"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              {tones.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="book-style">Title style</label>
            <select
              className="select"
              id="book-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              {styles.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="book-keyword">
              Optional primary keyword, theme, or topic
            </label>
            <input
              className="input"
              id="book-keyword"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder={
                bookType === "Fiction"
                  ? "Examples: moon garden, lost cartographer, second chances"
                  : "Examples: leadership, AI automation, better sleep"
              }
            />
          </div>

          <div className="field full">
            <label htmlFor="book-secondary">
              Optional secondary idea
            </label>
            <input
              className="input"
              id="book-secondary"
              value={secondaryIdea}
              onChange={(event) => setSecondaryIdea(event.target.value)}
              placeholder={
                bookType === "Fiction"
                  ? "Examples: winter city, inheritance, hidden map"
                  : "Examples: teams, decision making, daily routines"
              }
            />
          </div>

          <div className="field">
            <label htmlFor="book-count">Number of titles</label>
            <select
              className="select"
              id="book-count"
              value={count}
              onChange={(event) => setCount(event.target.value)}
            >
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate book titles
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your book title ideas</h2>
            <p>
              Shortlist the strongest directions, then check for similar
              existing titles before publishing.
            </p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button
              className="button secondary small"
              type="button"
              onClick={copyAll}
              disabled={!titles.length}
            >
              Copy all
            </button>
          </div>
        </div>

        <div className={titles.length ? "output" : "output empty"}>
          {titles.length
            ? titles.map((title, index) => `${index + 1}. ${title}`).join("\n")
            : "Your book title ideas will appear here."}
        </div>
      </section>
    </div>
  );
}
