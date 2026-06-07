import { useState } from "react";

function Home() {
  const [movies] = useState([
    {
      title: "The Last Kingdom",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cyber Future",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dark Horizon",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Golden Empire",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Night Runner",
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  return (
    <div
      style={{
        background: "#080808",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          position: "fixed",
          width: "100%",
          zIndex: 100,
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            color: "#D4AF37",
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          ABSOLUTE CINEMA
        </h1>

        <div
          style={{
            display: "flex",
            gap: "30px",
            fontWeight: "500",
          }}
        >
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>My List</span>
        </div>

        <div
          style={{
            background: "#D4AF37",
            color: "#000",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          A
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          height: "90vh",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.95), rgba(0,0,0,.4)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          paddingLeft: "80px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "70px",
              color: "#D4AF37",
              marginBottom: "20px",
            }}
          >
            ABSOLUTE ORIGINAL
          </h1>

          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            SHADOW OF THE EMPIRE
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Power. Betrayal. Revenge.
            One kingdom. One ruler.
            Watch the most anticipated Absolute Cinema Original.
          </p>

          <button
            style={{
              background: "#D4AF37",
              color: "#000",
              border: "none",
              padding: "15px 35px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              marginRight: "15px",
            }}
          >
            ▶ Watch Now
          </button>

          <button
            style={{
              background: "rgba(255,255,255,.1)",
              color: "#fff",
              border: "1px solid #444",
              padding: "15px 35px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            + My List
          </button>
        </div>
      </div>

      {/* TRENDING */}
      <div style={{ padding: "40px 50px" }}>
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          Trending Now
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              style={{
                minWidth: "280px",
                cursor: "pointer",
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* NEW RELEASES */}
      <div style={{ padding: "20px 50px" }}>
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          New Releases
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{movie.title}</h3>
                <p style={{ color: "#aaa" }}>
                  Premium Absolute Cinema Content
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 Absolute Cinema. All Rights Reserved.
      </div>
    </div>
  );
}

export default Home;