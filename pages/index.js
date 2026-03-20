import { useState, useEffect } from "react";

export default function Home() {
  const [section, setSection] = useState("home");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Montserrat",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* DARK OVERLAY */}
      <div style={{ background: "rgba(0,0,0,0.65)", minHeight: "100vh" }}>

        {/* NAVBAR */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 30px", alignItems: "center" }}>
          <div>
            <h2
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "26px",
                margin: 0,
                background: "linear-gradient(45deg,#ff4d6d,#facc15,#38bdf8)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              BoardingWithBae ✈️❤️✨
            </h2>
            <span style={{ fontSize: "12px" }}>
              KRISHVYSH 🕺💃
            </span>
          </div>

          <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <span onClick={() => setSection("home")} style={{ cursor: "pointer" }}>Home</span>
            <span onClick={() => setSection("dance")} style={{ cursor: "pointer" }}>Dance</span>
            <span onClick={() => setSection("travel")} style={{ cursor: "pointer" }}>Travel</span>
            <span onClick={() => setSection("lifestyle")} style={{ cursor: "pointer" }}>Lifestyle</span>
          </div>
        </div>

        {/* HERO */}
        {section === "home" && (
          <div style={{ textAlign: "center", padding: "100px 20px" }}>

            {/* BIG TITLE */}
            <h1
              style={{
                fontSize: "clamp(50px,8vw,90px)",
                fontFamily: "'Dancing Script', cursive",
                background: "linear-gradient(45deg,#ff4d6d,#facc15,#38bdf8)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 20px rgba(255,77,109,0.4)",
              }}
            >
              BoardingWithBae ✈️❤️✨
            </h1>

            {/* SMALL NAME */}
            <p style={{ fontSize: "16px", marginTop: "5px" }}>
              KRISHVYSH 🕺💃
            </p>

            {/* TAGLINE */}
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              Dance • Travel • Love
            </p>

            <p style={{ maxWidth: "600px", margin: "20px auto", color: "#cbd5f5" }}>
              A crazy dancing couple vibing through cities, capturing love, energy, and unforgettable moments.
            </p>

            {/* SOCIAL BUTTONS */}
            <div style={{ marginTop: "25px", display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>

              {/* INSTAGRAM */}
              <button
                onClick={() => window.open("https://www.instagram.com/boardingwithbae/", "_blank")}
                style={{
                  padding: "12px 20px",
                  background: "#E1306C",
                  borderRadius: "25px",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                📸 Instagram
              </button>

              {/* YOUTUBE */}
              <button
                onClick={() => window.open("https://youtube.com", "_blank")}
                style={{
                  padding: "12px 20px",
                  background: "#FF0000",
                  borderRadius: "25px",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ▶️ YouTube
              </button>

            </div>
          </div>
        )}

        {/* DANCE */}
        {section === "dance" && (
          <div style={{ padding: "40px" }}>
            <h1>💃 Dance</h1>
            <p>Energetic reels, choreography & couple performances.</p>
          </div>
        )}

        {/* TRAVEL */}
        {section === "travel" && (
          <div style={{ padding: "40px" }}>
            <h1>✈️ Travel</h1>
            <p>Exploring cities, skylines & crazy adventures together.</p>
          </div>
        )}

        {/* LIFESTYLE */}
        {section === "lifestyle" && (
          <div style={{ padding: "40px" }}>
            <h1>❤️ Lifestyle</h1>
            <p>Love, fun, behind-the-scenes & daily couple vibes.</p>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "20px", color: "#94a3b8" }}>
          © 2026 BoardingWithBae ✈️❤️✨
        </div>
      </div>
    </div>
  );
}
