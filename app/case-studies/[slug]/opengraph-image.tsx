import { ImageResponse } from "next/og";
import { caseStudies } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const current = caseStudies.find((entry) => entry.id === params.slug);

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
          background: "linear-gradient(145deg, #0d1218 0%, #15263e 60%, #1b2130 100%)",
          color: "#f2f4f8",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 2, opacity: 0.8 }}>CASE STUDY</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: "84%" }}>
            {current?.title ?? "Case Study"}
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, maxWidth: "82%" }}>
            {current?.summary ?? "Observability and reliability implementation details."}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
