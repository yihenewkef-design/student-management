import React from "react";

function About() {
  return (
    <section id="about" style={styles.container}>
      <h2>About Me</h2>
      <p>
        I am Yihenew Kefyalew, a passionate Computer Science student
        at Mizan Tepi University. I love building websites, learning
        new technologies, and solving problems.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "50px",
    background: "#1e293b",
    color: "#fff",
    textAlign: "center"
  }
};

export default About;