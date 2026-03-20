import { useState } from "react";

export default function KrishWebsite() {
  const [section, setSection] = useState("home");

  return (
    <div style={{ 
      fontFamily: "Arial", 
      backgroundImage: "url('/new-york-4753156...jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white", 
      minHeight: "100vh" 
    }}>

      {/* OVERLAY */}
      <div style={{ background: "rgba(0,0,0,0.6)", minHeight: "100vh" }}>

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
          <div style={{ textAlign: "center", padding: "60px 15px" }}>
            <h1 style={{
              fontSize: "42px",
              lineHeight: "1.2",
              fontFamily: "cursive",
              background: "linear-gradient(45deg,#ff4d6d,#facc15,#38bdf8)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold"
            }}>
              BoardingWithBae 💃✈️❤️
            </h1>

            <p style={{ fontSize: "18px", color: "#e2e8f0", marginTop: "10px" }}>
              Dance • Travel • Love
            </p>

            <p style={{ maxWidth: "90%", margin: "15px auto", color: "#cbd5f5", fontSize: "14px" }}>
              Dancing through cities, exploring skylines, and capturing love in every moment.
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
            <p>Exploring beautiful skylines and cities together.</p>
          </div>
        )}

        {/* LIFESTYLE */}
        {section === "lifestyle" && (
          <div style={{ padding: "20px" }}>
            <h1>❤️ Lifestyle</h1>
            <p>Our daily life, couple moments, and memories.</p>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "15px", marginTop: "30px", fontSize: "12px", color: "#cbd5f5" }}>
          © 2026 BoardingWithBae ❤️
        </div>

      </div>
    </div>
  );
}
