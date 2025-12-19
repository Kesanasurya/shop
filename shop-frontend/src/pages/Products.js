import { useState } from "react";
import ProductCard from "../components/ProductCard";

const staticProducts = [
  { id: 1, name: "Murukulu (1 Kg)", price: 500 },
  { id: 2, name: "Pabbillalu (1 Kg)", price: 500 },
  { id: 3, name: "Sunnundalu (1 Kg)", price: 600 },
  { id: 4, name: "Nuvvulundalu (1 Kg)", price: 500 },
  { id: 5, name: "Shakharpara (1 Kg)", price: 500 },
  { id: 6, name: "Chickies (1 Kg)", price: 450 },
  { id: 7, name: "Ravva Laddu (1 Kg)", price: 500 },
  { id: 8, name: "Kajikayalu (1 Kg)", price: 500 },
  { id: 9, name: "Sajja Vadalu (1 Kg)", price: 500 },
  { id: 10, name: "Dry Fruit Laddu (1 Kg)", price: 1200 },
  { id: 11, name: "Protein Laddu (1 Kg)", price: 1100 }
];

function Products() {
  const [products] = useState(staticProducts);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Products;
