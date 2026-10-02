import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "PromptVera — Better prompts. Better AI results.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #faf8ff 0%, #f1ebff 100%)",
          padding: "70px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "36px",
            background: "#ffffff",
            border: "2px solid #e6dcf7",
            padding: "54px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
              color: "#6b3fb5",
              marginBottom: "30px",
            }}
          >
            PromptVera
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "74px",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#282333",
            }}
          >
            <span>Better prompts.</span>
            <span style={{ color: "#6b3fb5" }}>Better AI results.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#665d73",
              marginTop: "34px",
            }}
          >
            Free AI prompt generators and creative tools · No login required
          </div>
        </div>
      </div>
    ),
    size,
  );
}
