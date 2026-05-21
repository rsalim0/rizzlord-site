import { ImageResponse } from "next/og";

export const alt = "Rizzlord — #1 AI Wingman, Rizz Generator & Pickup Line App";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(196, 109, 253, 0.45), transparent 45%), radial-gradient(circle at 80% 85%, rgba(255, 178, 223, 0.32), transparent 45%)",
          color: "#f5f1ff",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 220,
            fontWeight: 800,
            letterSpacing: "-0.08em",
            lineHeight: 1,
            background:
              "linear-gradient(90deg, #ffb2df 0%, #e7c0fb 45%, #b9afff 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Rizzlord
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 700,
            color: "rgba(245, 241, 255, 0.96)",
          }}
        >
          #1 AI Wingman
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 30,
            color: "rgba(245, 241, 255, 0.65)",
          }}
        >
          Rizz, pickup lines & replies — iOS &amp; Android
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
