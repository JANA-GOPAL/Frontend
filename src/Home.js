import { useState } from "react";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(localStorage.getItem("email"));

  return user ? <Home /> : <Login setUser={setUser} />;
}

export default App;