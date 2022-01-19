import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/get-started" className="navbar-btn">
        Login
      </Link>
      <Link to="/welcome" className="navbar-btn">
        Welcome page
      </Link>
      <Link to="/register" className="navbar-btn">
        Register
      </Link>
    </nav>
  );
};

export default Nav;
