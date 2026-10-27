import { ImageResponse } from "next/og";

export const alt = "Rahad Hussain, CSE Graduate & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#070707", color: "#f4f4f4" }}>
        <div style={{ fontSize: 120, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>Rahad</div>
        <div style={{ fontSize: 120, fontWeight: 600, letterSpacing: -4, lineHeight: 1, color: "#8f8f8f" }}>Hussain</div>
        <div style={{ marginTop: 40, fontSize: 36, color: "#8f8f8f" }}>CSE Graduate | Software Developer | rahad.bond</div>
      </div>
    ),
    size,
  );
}
