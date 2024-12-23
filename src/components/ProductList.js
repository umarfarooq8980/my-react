import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <section>
      <h2>Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },
};

export default ProductList;
