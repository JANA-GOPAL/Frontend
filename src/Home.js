import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { id: 1, img: "https://via.placeholder.com/200x300" },
      { id: 2, img: "https://via.placeholder.com/200x300" },
      { id: 3, img: "https://via.placeholder.com/200x300" },
      { id: 4, img: "https://via.placeholder.com/200x300" },
      { id: 5, img: "https://via.placeholder.com/200x300" },
    ]);
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px"
      }}>
        <h2 style={{ color: "red" }}>AbsoluteCinema</h2>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          style={{
            backgroundColor: "red",
            border: "none",
            padding: "10px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      {/* Hero Banner */}
      <div style={{
        height: "60vh",
        backgroundImage: "url('https://wallpaperaccess.com/full/2703652.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px"
      }}>
        <h1 style={{ fontSize: "50px" }}>Featured Movie 🎬</h1>
        <p style={{ maxWidth: "500px" }}>
          Watch the latest blockbuster movies and shows only on AbsoluteCinema.
        </p>

        <div style={{ marginTop: "20px" }}>
          <button style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer"
          }}>
            ▶ Play
          </button>

          <button style={{
            padding: "10px 20px",
            backgroundColor: "gray",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            More Info
          </button>
        </div>
      </div>

      {/* Movie Row */}
      <h2 style={{ padding: "20px" }}>Trending Now</h2>

      <div style={{
        display: "flex",
        overflowX: "scroll",
        gap: "15px",
        padding: "20px"
      }}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.img}
            alt="movie"
            style={{
              width: "200px",
              borderRadius: "8px",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;