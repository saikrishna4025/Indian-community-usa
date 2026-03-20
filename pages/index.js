import { useState } from "react";

export default function BoardingWithBaeWebsite() {
  const [section, setSection] = useState("home");

  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#0f172a", color: "white", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", borderBottom: "1px solid #1e293b" }}>
        <h2></h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <span onClick={() => setSection("home")} style={{ cursor: "pointer" }}>Home</span>
          <span onClick={() => setSection("fitness")} style={{ cursor: "pointer" }}>Fitness</span>
          <span onClick={() => setSection("cooking")} style={{ cursor: "pointer" }}>Cooking</span>
          <span onClick={() => setSection("dance")} style={{ cursor: "pointer" }}>Dance</span>
          <span onClick={() => setSection("travel")} style={{ cursor: "pointer" }}>Travel</span>
        </div>
      </div>

      {/* HERO */}
      {section === "home" && (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>BoardingWithBae ✈️❤️</h1>
          <p style={{ color: "#94a3b8" }}>Fitness | Cooking | Dance | Travel</p>
          <p style={{ marginTop: "20px", maxWidth: "600px", marginInline: "auto" }}>
            Building a lifestyle of fitness, culture, and growth while living in the USA.
          </p>
        </div>
      )}

      {/* FITNESS */}
      {section === "fitness" && (
        <div style={{ padding: "40px" }}>
          <h1>💪 Fitness Journey</h1>
          <p>Tracking my workouts, diet plans, and transformation goals.</p>
        </div>
      )}

      {/* COOKING */}
      {section === "cooking" && (
        <div style={{ padding: "40px" }}>
          <h1>🍳 Cooking</h1>
          <p>Paneer Curry, Chicken Curry, Coconut Rice & more homemade recipes.</p>
        </div>
      )}

      {/* DANCE */}
      {section === "dance" && (
        <div style={{ padding: "40px" }}>
          <h1>💃 Dance</h1>
          <p>Indian + Western dance reels and performances.</p>
        </div>
      )}

      {/* TRAVEL */}
      {section === "travel" && (
        <div style={{ padding: "40px" }}>
          <h1>✈️ Travel</h1>
          <p>Exploring places across the USA and sharing experiences.</p>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #1e293b", marginTop: "40px" }}>
        <p style={{ color: "#94a3b8" }}>© 2026 BoardingWithBae | Built with passion 🔥</p>
      </div>
    </div>
  );
}
