import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Yihenew</h2>
      <ul style={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 50px",
    background: "#111",
    color: "#fff",
    position: "sticky",
    top: 0
  },
  logo: {
    color: "#00dfc4"
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px"
  }
};

export default Navbar;