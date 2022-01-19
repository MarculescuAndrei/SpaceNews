import React from "react";
import { Link } from "react-router-dom";

const LoginedNav = () => {
  return (
    <nav className="nav">
      <Link to="/logout" className="navbar-btn">
        Logout
      </Link>
      <Link to="/home" className="navbar-btn">
        Home
      </Link>
      <Link to="/profile" className="navbar-btn">
        Profile
      </Link>
    </nav>
  );
};
export default LoginedNav;
