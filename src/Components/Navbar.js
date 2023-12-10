import React from "react";
import logo from "../Images/Fill 213.svg";

const Navbar = function () {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <p className="nav-title">my travel journal.</p>
    </nav>
  );
};

export default Navbar;
