import { ImageResponse } from "next/og";

// Favicon: "CA" monogram in the site's accent color (replaces the default Vercel icon).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#59675D",
          color: "#FFFFFF",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "-1px",
        }}
      >
        CA
      </div>
    ),
    size
  );
}
