import { useState, useEffect } from "react";

function Landing({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState("en");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "WHERE EVERY SCREEN BECOMES CINEMA",
      subtitle:
        "Stream movies, originals, live events and exclusive content.",
      email: "Email Address",
      password: "Create Password",
      continue: "Continue",
      enter: "Enter Cinema",
      member: "Already a member?",
      signin: "Sign In",
    },
    ta: {
      title: "ஒவ்வொரு திரையும் ஒரு திரையரங்கம்",
      subtitle:
        "திரைப்படங்கள், தொடர்கள் மற்றும் சிறப்பு நிகழ்ச்சிகளை பாருங்கள்.",
      email: "மின்னஞ்சல் முகவரி",
      password: "கடவுச்சொல் உருவாக்கவும்",
      continue: "தொடரவும்",
      enter: "திரையரங்கில் நுழையவும்",
      member: "ஏற்கனவே உறுப்பினரா?",
      signin: "உள்நுழைக",
    },
  };

  const t = content[language];

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 40px",
        }}
      >
        <h1
          style={{
            color: "#D4AF37",
            letterSpacing: "4px",
            margin: 0,
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
          <span style={{ color: "#D4AF37" }}>{time}</span>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              padding: "8px",
              background: "#111",
              color: "white",
              border: "1px solid #D4AF37",
            }}
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>
      </div>

      {/* Center Content */}
      <div
        style={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            maxWidth: "900px",
            fontSize: "55px",
            color: "#D4AF37",
            marginBottom: "15px",
          }}
        >
          {t.title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            color: "#ddd",
            marginBottom: "35px",
          }}
        >
          {t.subtitle}
        </p>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "350px",
                padding: "15px",
                fontSize: "16px",
                border: "1px solid #D4AF37",
                background: "#111",
                color: "white",
                marginBottom: "15px",
              }}
            />

            <button
              onClick={() => {
                if (!email) {
                  alert("Enter email");
                  return;
                }
                setStep(2);
              }}
              style={{
                padding: "15px 35px",
                background: "#D4AF37",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {t.continue}
            </button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <input
              type="password"
              placeholder={t.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "350px",
                padding: "15px",
                fontSize: "16px",
                border: "1px solid #D4AF37",
                background: "#111",
                color: "white",
                marginBottom: "15px",
              }}
            />

            <button
              onClick={() => {
                if (!password) {
                  alert("Create password");
                  return;
                }

                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                setUser("home");
              }}
              style={{
                padding: "15px 35px",
                background: "#D4AF37",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {t.enter}
            </button>
          </>
        )}

        <p style={{ marginTop: "25px" }}>
          {t.member}{" "}
          <span
            onClick={() => setUser("login")}
            style={{
              color: "#D4AF37",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {t.signin}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Landing;