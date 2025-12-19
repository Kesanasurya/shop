import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <Link to="/" style={{ margin: 10, color: "white" }}>Home</Link>
      <Link to="/products" style={{ margin: 10, color: "white" }}>Products</Link>
      <Link to="/cart" style={{ margin: 10, color: "white" }}>Cart</Link>
      <Link to="/admin" style={{ margin: 10, color: "white" }}>Admin</Link>
    </nav>
  );
}

export default Navbar;
