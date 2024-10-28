import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Image Gallery</h1>
      <Link to="/gallery" style={styles.link}>
        Go to Gallery
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: "3rem",
    color: "#333",
  },
  link: {
    marginTop: "20px",
    fontSize: "1.5rem",
    color: "#fff",
    backgroundColor: "#6200ea",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Home;
