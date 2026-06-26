import { ImageResponse } from "next/og";

export const alt =
  "Jonas Mattes — Freelance Frontend & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              background: "#fbe284",
              border: "3px solid #111",
            }}
          />
          <div
            style={{
              fontSize: "30px",
              color: "#555",
              fontFamily: "monospace",
              letterSpacing: "2px",
            }}
          >
            jmattes.de
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: "#111",
              letterSpacing: "-2px",
            }}
          >
            Jonas Mattes
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#111",
                background: "#fbe284",
                padding: "8px 20px",
                border: "3px solid #111",
                boxShadow: "6px 6px 0 0 #111",
              }}
            >
              Frontend &amp; Full-Stack Developer
            </div>
          </div>
        </div>

        <div style={{ fontSize: "30px", color: "#444", maxWidth: "900px" }}>
          7+ years building fast, accessible web apps — Angular, React, Next.js
          &amp; TypeScript. Ex-Google.
        </div>
      </div>
    ),
    { ...size }
  );
}
