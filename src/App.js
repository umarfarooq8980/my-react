import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <main>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </div>
  );
};

export default App;
