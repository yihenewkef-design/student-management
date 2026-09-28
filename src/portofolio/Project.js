import React from "react";

function Project() {
  return (
    <section id="project" style={styles.container}>
      <h2>My Projects</h2>

      <div style={styles.card}>
        <h3>Student Management System</h3>
        <p>React-based system for managing student data.</p>
      </div>

      <div style={styles.card}>
        <h3>Portfolio Website</h3>
        <p>Personal portfolio built with React.</p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "50px",
    background: "#0f172a",
    color: "#fff",
    textAlign: "center"
  },
  card: {
    background: "#1e293b",
    margin: "20px auto",
    padding: "20px",
    width: "60%",
    borderRadius: "10px"
  }
};

export default Project;