import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    // Fetch data from Jikan API for the current anime season
    axios
      .get("https://api.jikan.moe/v4/seasons/now?sfw")
      .then((response) => {
        setAnimeList(response.data.data);  // Set the list of anime from the API response
      })
      .catch((error) => {
        console.log("Error fetching anime data", error);
      });
  }, []);

  return (
    <div style={styles.galleryContainer}>
      <h1 style={styles.title}>Currently Airing Anime</h1>
      <div style={styles.animeGrid}>
        {animeList.map((anime) => (
          <div key={anime.mal_id} style={styles.animeCard}>
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={styles.animeImage}
            />
            <h3 style={styles.animeTitle}>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  galleryContainer: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#333",
  },
  animeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  animeCard: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "10px",
  },
  animeImage: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  animeTitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "10px",
  },
};

export default Gallery;
