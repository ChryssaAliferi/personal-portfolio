import { ImageResponse } from "next/og";

// Preview image for links shared on LinkedIn, X, Slack, etc. Applies to every
// route; generated at build time.
export const alt = "Chryssa Aliferi — Designing systems that power products, and the teams behind them.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#FAF8F5",
          color: "#2D2D2D",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "12px 28px",
            borderRadius: 999,
            background: "rgba(124, 144, 130, 0.15)",
            color: "#59675D",
            fontSize: 28,
          }}
        >
          www.califeri.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, letterSpacing: "-2px" }}>Chryssa Aliferi</div>
          <div style={{ fontSize: 44, color: "#5A5A5A", lineHeight: 1.3, maxWidth: 950 }}>
            Designing systems that power products — and the teams behind them.
          </div>
        </div>
        <div style={{ display: "flex", height: 8, width: 160, borderRadius: 4, background: "#7C9082" }} />
      </div>
    ),
    size
  );
}
