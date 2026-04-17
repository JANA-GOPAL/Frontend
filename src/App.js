import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Landing from "./Landing";

function App() {
  const [page, setPage] = useState("landing");

  if (page === "login") {
    return <Login setUser={() => setPage("home")} />;
  }

  if (page === "home") {
    return <Home />;
  }

  return <Landing setUser={setPage} />;
}

export default App;