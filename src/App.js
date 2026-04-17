import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Landing from "./Landing";

function App() {
  const [user, setUser] = useState(localStorage.getItem("email"));

  if (user === "login") {
    return <Login setUser={setUser} />;
  }

  if (user) {
    return <Home />;
  }

  return <Landing setUser={setUser} />;
}

export default App;
