import React from "react";

function Home() {
  return (
    <section id="home" style={styles.container}>
      <h1 style={styles.title}>Hi, I'm Yihenew Kefyalew</h1>
      
      <h2 style={styles.subtitle}>
        3rd Year Computer Science Student
      </h2>

      <p style={styles.text}>
        I am a passionate developer who loves building web applications using
        modern technologies like React.
      </p>

      <button style={styles.button}>View My Work</button>
    </section>
  );
}

const styles = {
  container: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
    textAlign: "center",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "24px",
    color: "#555",
  },
  text: {
    maxWidth: "500px",
    marginTop: "15px",
    color: "#666",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Home;