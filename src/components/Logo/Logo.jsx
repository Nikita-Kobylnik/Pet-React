import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-white.png";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img className="logo__img" src={logo} alt="" />
    </Link>
  );
};

export default Logo;
