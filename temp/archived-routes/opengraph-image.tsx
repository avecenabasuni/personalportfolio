import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0d1218 0%, #122136 52%, #0f1828 100%)",
          color: "#eef4ff",
          padding: "64px",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 36,
            opacity: 0.95,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avecenabasuni.my.id/images/logo-avecenabasuni.jpg"
            alt="Avecena Basuni logo"
            style={{
              width: 62,
              height: 62,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.22)",
              background: "rgba(255,255,255,0.04)",
            }}
          />
          avecenabasuni.my.id
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              maxWidth: "17ch",
            }}
          >
            Avecena Basuni
          </div>
          <div style={{ fontSize: 38, opacity: 0.82 }}>
            SRE • Observability • Cloud Infrastructure
          </div>
        </div>
      </div>
    ),
    size,
  );
}
