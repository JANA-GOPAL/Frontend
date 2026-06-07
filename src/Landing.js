import { useState, useEffect } from "react";

function Landing({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState("en");
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const content = {
    en: {
      title: "YOUR CINEMA. YOUR WORLD.",
      subtitle:
        "Discover blockbuster movies, premium originals and unforgettable stories.",
      email: "Enter your email",
      password: "Create a password",
      continue: "Get Started",
      enter: "Enter Absolute Cinema",
      signin: "Sign In",
      member: "Already a member?",
    },

    ta: {
      title: "உங்கள் திரை. உங்கள் உலகம்.",
      subtitle:
        "சிறந்த திரைப்படங்கள், தொடர்கள் மற்றும் பிரத்தியேக உள்ளடக்கங்களை அனுபவிக்கவும்.",
      email: "மின்னஞ்சல் முகவரி",
      password: "கடவுச்சொல் உருவாக்கவும்",
      continue: "தொடரவும்",
      enter: "அகத்துக்கு செல்லவும்",
      signin: "உள்நுழைக",
      member: "ஏற்கனவே உறுப்பினரா?",
    },
  };

  const t = content[language];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
        }}
      >
        <h1
          style={{
            color: "#D4AF37",
            margin: 0,
            fontSize: "32px",
            letterSpacing: "2px",
            fontWeight: "700",
          }}
        >
          ABSOLUTE CINEMA
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              color: "#D4AF37",
              fontWeight: "600",
            }}
          >
            {time}
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              background: "#111",
              color: "#fff",
              border: "1px solid #D4AF37",
              padding: "8px 12px",
              borderRadius: "6px",
            }}
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            textAlign: "center",
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            padding: "50px",
            borderRadius: "20px",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <h1
            style={{
              color: "#D4AF37",
              fontSize: "56px",
              marginBottom: "20px",
              lineHeight: "1.1",
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              color: "#ddd",
              fontSize: "20px",
              marginBottom: "40px",
            }}
          >
            {t.subtitle}
          </p>

          {step === 1 && (
            <>
              <input
                type="email"
                placeholder={t.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "16px",
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #D4AF37",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              />

              <button
                onClick={() => {
                  if (!email) {
                    alert("Enter Email");
                    return;
                  }
                  setStep(2);
                }}
                style={{
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  padding: "16px 30px",
                  fontWeight: "700",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                {t.continue}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="password"
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "16px",
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #D4AF37",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              />

              <button
                onClick={() => {
                  if (!password) {
                    alert("Create Password");
                    return;
                  }

                  localStorage.setItem("email", email);
                  localStorage.setItem("password", password);

                  setUser("home");
                }}
                style={{
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  padding: "16px 30px",
                  fontWeight: "700",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                {t.enter}
              </button>
            </>
          )}

          <div
            style={{
              marginTop: "25px",
              color: "#ddd",
            }}
          >
            {t.member}{" "}
            <span
              onClick={() => setUser("login")}
              style={{
                color: "#D4AF37",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              {t.signin}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;