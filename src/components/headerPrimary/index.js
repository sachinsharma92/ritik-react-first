import { Link } from "react-router-dom";

function HeaderPrimary() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
}

export default HeaderPrimary;
