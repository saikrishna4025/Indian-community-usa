import { useState } from "react";

export default function KrishWebsite() {
  const [section, setSection] = useState("home");

  return (
    <div style={{ fontFamily: "Arial", background: "linear-gradient(135deg,#0f172a,#1e293b)", color: "white", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>BoardingWithBae ✈️❤️</h2>
        <div style={{ display: "flex", gap: "25px" }}>
          <span style={{ cursor: "pointer" }} onClick={() => setSection("home")}>Home</span>
          <span style={{ cursor: "pointer" }} onClick={() => setSection("travel")}>Travel</span>
          <span style={{ cursor: "pointer" }} onClick={() => setSection("food")}>Food</span>
          <span style={{ cursor: "pointer" }} onClick={() => setSection("lifestyle")}>Lifestyle</span>
        </div>
      </div>

      {/* HERO SECTION */}
      {section === "home" && (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h1 style={{ fontSize: "64px", fontWeight: "bold" }}>
            BoardingWithBae ✈️❤️
          </h1>

          <p style={{ fontSize: "20px", color: "#cbd5f5", marginTop: "10px" }}>
            Travel • Food • Love
          </p>

          <p style={{ maxWidth: "600px", margin: "20px auto", color: "#94a3b8" }}>
            A journey of love, adventures, and unforgettable experiences across the USA.
          </p>

          <button style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#f43f5e",
            border: "none",
            borderRadius: "25px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Explore Our Journey
          </button>
        </div>
      )}

      {/* TRAVEL */}
      {section === "travel" && (
        <div style={{ padding: "40px" }}>
          <h1>✈️ Travel</h1>
          <p>Exploring beautiful places together across the USA.</p>
        </div>
      )}

      {/* FOOD */}
      {section === "food" && (
        <div style={{ padding: "40px" }}>
          <h1>🍽️ Food</h1>
          <p>Trying delicious dishes and sharing our favorite meals.</p>
        </div>
      )}

      {/* LIFESTYLE */}
      {section === "lifestyle" && (
        <div style={{ padding: "40px" }}>
          <h1>💑 Lifestyle</h1>
          <p>Our daily life, moments, and memories together.</p>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "20px", marginTop: "40px", color: "#94a3b8" }}>
        © 2026 BoardingWithBae ❤️
      </div>
    </div>
  );
}
