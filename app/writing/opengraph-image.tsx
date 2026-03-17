import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #0d1218 0%, #133151 62%, #1a1f2d 100%)",
          color: "#f2f4f8",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 2, opacity: 0.8 }}>WRITING</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, lineHeight: 1.04, maxWidth: "84%" }}>
            Notes on Observability and Reliability
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, maxWidth: "80%" }}>
            Practical implementation stories from production systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
