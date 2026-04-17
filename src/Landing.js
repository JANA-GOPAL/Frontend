import { useState, useEffect } from "react";

function Landing({ setUser }) {
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  // Clock
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    if (!email) {
      alert("Enter email");
      return;
    }
    localStorage.setItem("email", email);
    setUser(email);
  };

  return (
    <div style={{
      height: "100vh",
      backgroundImage:
        "url('https://assets.nflxext.com/ffe/siteui/vlv3/9c3e4d87-1b2e-4c9c-9e8c-9f0e1e5e3f8c/india-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      position: "relative"
    }}>

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)"
      }} />

      {/* Top bar */}
      <div style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        zIndex: 2
      }}>
        <h2 style={{ color: "red" }}>AbsoluteCinema</h2>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <select style={{ padding: "5px" }}>
            <option>English</option>
            <option>Tamil</option>
          </select>
          <span>{time}</span>
        </div>
      </div>

      {/* Center content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1>Unlimited movies, shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <div style={{ marginTop: "20px", display: "flex" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              width: "300px",
              border: "none"
            }}
          />

          <button
            onClick={handleStart}
            style={{
              padding: "12px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Get Started →
          </button>
        </div>

        <p style={{ marginTop: "15px" }}>
          Already a user?{" "}
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => setUser("login")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Landing;