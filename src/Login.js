import { useState } from "react";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    try {
      const res = await fetch("http://3.91.31.68:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token); // JWT
        localStorage.setItem("email", email); // store email
        setUser(email);
      } else {
        alert(data.msg);
      }

    } catch (err) {
      alert("Server error ❌");
      console.error(err);
    }
  };

  return (
    <div style={{
      height: "100vh",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    }}>
      <div style={{
        backgroundColor: "#111",
        padding: "40px",
        borderRadius: "8px",
        width: "300px"
      }}>
        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;