import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/products">Products</Link>

      <br />
      <a href="/about">about</a>
      <a href="/home">Home</a>
    </div>
  );
};

export default Header;
