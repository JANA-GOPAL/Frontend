import { useState } from "react";

function Landing({ setUser }) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      title: "Unlimited cinema. Infinite stories.",
      sub: "Watch anywhere. Cancel anytime.",
      placeholder: "Enter your email",
      btn: "Get Started",
      login: "Already a user?"
    },
    ta: {
      title: "முடிவற்ற திரைப்படங்கள். முடிவில்லா கதைகள்.",
      sub: "எங்கு வேண்டுமானாலும் பார்க்கலாம்.",
      placeholder: "மின்னஞ்சல் உள்ளிடவும்",
      btn: "தொடங்குங்கள்",
      login: "ஏற்கனவே பயனரா?"
    }
  };

  const t = text[lang];

  return (
    <div style={{
      height: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1606813907291-d86efa9b94db')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white"
    }}>

      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px"
      }}>
        <h2 style={{ color: "red" }}>AbsoluteCinema</h2>

        <select onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
        </select>
      </div>

      {/* Center */}
      <div style={{
        textAlign: "center",
        marginTop: "150px"
      }}>
        <h1>{t.title}</h1>
        <p>{t.sub}</p>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "12px",
                width: "300px",
                marginRight: "10px"
              }}
            />

            <button
              onClick={() => email && setStep(2)}
              style={{
                padding: "12px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              {t.btn}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <input
              type="password"
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px",
                width: "300px",
                marginRight: "10px"
              }}
            />

            <button
              onClick={() => password && setUser("home")}
              style={{
                padding: "12px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Enter
            </button>
          </>
        )}

        <p style={{ marginTop: "20px" }}>
          {t.login}{" "}
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