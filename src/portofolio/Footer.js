import React from "react";

function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <p>© 2026 Yihenew Kefyalew</p>
      <p>Email: yihenew@email.com</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "20px",
    background: "#111",
    color: "#fff",
    textAlign: "center"
  }
};

export default Footer;