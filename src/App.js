import { useState } from "react";
import Login from "./Login";

function App() {

  // ✅ load email (user identity)
  const [user, setUser] = useState(localStorage.getItem("email"));

  const [currentVideo, setCurrentVideo] = useState(
    "https://netflix-clone-jana-2026.s3.us-east-1.amazonaws.com/file_example_MP4_1920_18MG.mp4"
  );

  const movies = [
    {
      image: "https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      video: "https://netflix-clone-jana-2026.s3.us-east-1.amazonaws.com/file_example_MP4_1920_18MG.mp4"
    },
    {
      image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      video: "https://netflix-clone-jana-2026.s3.us-east-1.amazonaws.com/file_example_MP4_1920_18MG.mp4"
    },
    {
      image: "https://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      video: "https://netflix-clone-jana-2026.s3.us-east-1.amazonaws.com/file_example_MP4_1920_18MG.mp4"
    },
    {
      image: "https://image.tmdb.org/t/p/w300/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      video: "https://netflix-clone-jana-2026.s3.us-east-1.amazonaws.com/file_example_MP4_1920_18MG.mp4"
    },
    {
      image: "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      video: "https://netflix-clone-jana-2026.s3.us-east-1.amazonaws.com/file_example_MP4_1920_18MG.mp4"
    }
  ];

  // ✅ show login if not logged in
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <div style={{
        padding: "20px",
        color: "red",
        fontSize: "24px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        ABSOLUTE CINEMA 🎬

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "white", fontSize: "14px" }}>
            {user}
          </span>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              setUser(null);
            }}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        position: "relative",
        height: "500px"
      }}>
        <video
          src={currentVideo}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div style={{
          position: "absolute",
          bottom: "50px",
          left: "30px"
        }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            ABSOLUTE CINEMA
          </h1>
          <p>Watch something amazing today.</p>

          <button style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px"
          }}>
            ▶ Play
          </button>
        </div>
      </div>

      {/* Movie Row */}
      <div style={{ padding: "20px" }}>
        <h2>Trending Now</h2>

        <div style={{
          display: "flex",
          gap: "10px",
          overflowX: "scroll"
        }}>
          {movies.map((movie, index) => (
            <img
              key={index}
              src={movie.image}
              alt="movie"
              onClick={() => setCurrentVideo(movie.video)}
              style={{
                width: "200px",
                cursor: "pointer",
                transition: "transform 0.3s"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;