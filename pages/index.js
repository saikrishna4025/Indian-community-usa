import { useState } from "react";

export default function KrishWebsite() {
  const [section, setSection] = useState("home");

  return (
    <div style={{ fontFamily: "Arial", background: "linear-gradient(135deg,#0f172a,#1e293b)", color: "white", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "15px" }}>
        <h2 style={{
          fontSize: "24px",
          marginBottom: "10px",
          fontFamily: "cursive",
          background: "linear-gradient(45deg,#ff4d6d,#facc15,#38bdf8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold"
        }}>
          BoardingWithBae 💃✈️❤️
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
          <span onClick={() => setSection("home")} style={{ cursor: "pointer" }}>Home</span>
          <span onClick={() => setSection("dance")} style={{ cursor: "pointer" }}>Dance</span>
          <span onClick={() => setSection("travel")} style={{ cursor: "pointer" }}>Travel</span>
          <span onClick={() => setSection("lifestyle")} style={{ cursor: "pointer" }}>Lifestyle</span>
        </div>
      </div>

      {/* HERO */}
      {section === "home" && (
        <div style={{ textAlign: "center", padding: "40px 15px" }}>
          <h1 style={{
            fontSize: "40px",
            lineHeight: "1.2",
            fontFamily: "cursive",
            background: "linear-gradient(45deg,#ff4d6d,#facc15,#38bdf8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold"
          }}>
            BoardingWithBae 💃✈️❤️
          </h1>

          <p style={{ fontSize: "16px", color: "#cbd5f5", marginTop: "10px" }}>
            Dance • Travel • Love
          </p>

          <p style={{ maxWidth: "90%", margin: "15px auto", color: "#94a3b8", fontSize: "14px" }}>
            A dancing couple sharing our journey through travel, vlogs, and lifestyle moments.
          </p>

          <button style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#f43f5e",
            border: "none",
            borderRadius: "20px",
            color: "white",
            fontSize: "14px",
            cursor: "pointer"
          }}>
            Watch Our Journey 🎥
          </button>
        </div>
      )}

      {/* DANCE */}
      {section === "dance" && (
        <div style={{ padding: "20px" }}>
          <h1>💃 Dance</h1>
          <p>Our dance reels, choreography, and performances.</p>
        </div>
      )}

      {/* TRAVEL */}
      {section === "travel" && (
        <div style={{ padding: "20px" }}>
          <h1>✈️ Travel Vlogs</h1>
          <p>Exploring beautiful places together and sharing our travel stories.</p>
        </div>
      )}

      {/* LIFESTYLE */}
      {section === "lifestyle" && (
        <div style={{ padding: "20px" }}>
          <h1>❤️ Lifestyle</h1>
          <p>Our daily life, couple moments, and behind-the-scenes memories.</p>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "15px", marginTop: "30px", fontSize: "12px", color: "#94a3b8" }}>
        © 2026 BoardingWithBae ❤️
      </div>
    </div>
  );
}
