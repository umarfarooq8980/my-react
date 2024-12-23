import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "1rem",
    margin: "1rem",
    textAlign: "center",
  },
};

export default ProductCard;
