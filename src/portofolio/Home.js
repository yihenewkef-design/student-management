import React from "react";

function Home() {
  return (
    <section id="home" style={styles.container}>
      <h1>Hello, I'm Yihenew Kefyalew</h1>
      <h2>3rd Year Computer Science Student</h2>
      <p>Mizan Tepi University</p>
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
    background: "#0f172a",
    color: "#fff"
  }
};

export default Home;