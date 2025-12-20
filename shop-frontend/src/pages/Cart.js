import React from "react";

function Cart() {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePay = () => {
    if (cart.length === 0) {
      alert("No items to pay");
      return;
    }
    alert(`Payment successful. Total: ₹${total}`);
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleCancel = () => {
    if (cart.length === 0) return;
    if (!window.confirm("Clear cart?")) return;
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
        </div>
      ))}
      <hr />
      <div style={{ marginTop: 12 }}>
        <strong>To Pay:</strong> ₹{total}
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button onClick={handlePay}>Pay</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Cart;
