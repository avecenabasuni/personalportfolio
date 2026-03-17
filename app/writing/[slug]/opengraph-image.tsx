import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const readableTitle = params.slug
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

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
          background: "linear-gradient(145deg, #0d1218 0%, #10355a 62%, #1a1f2d 100%)",
          color: "#f2f4f8",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 2, opacity: 0.8 }}>WRITING NOTE</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: "84%" }}>
            {readableTitle || "Article Preview"}
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, maxWidth: "80%" }}>
            Preview route for article metadata and social sharing.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
