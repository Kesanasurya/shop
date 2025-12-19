function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items</p>}
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
        </div>
      ))}
    </div>
  );
}

export default Cart;
