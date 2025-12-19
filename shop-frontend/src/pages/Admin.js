import { useState } from "react";
import api from "../service/api";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    api.post("/products", { name, price })
      .then(() => alert("Product added"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>
      <input
        placeholder="Product name"
        onChange={e => setName(e.target.value)}
      /><br /><br />
      <input
        placeholder="Price"
        onChange={e => setPrice(e.target.value)}
      /><br /><br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default Admin;
