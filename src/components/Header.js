import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>E-Commerce Store</h1>
      <nav>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>Products</a>
        <a href="#" style={styles.link}>Cart</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
  link: {
    color: "white",
    margin: "0 1rem",
    textDecoration: "none",
  },
};

export default Header;
