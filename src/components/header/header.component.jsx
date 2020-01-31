import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className='logo-container'>
        <Logo className="logo" />
      </Link>
      <div className='options'>
          <Link className='option' to='/shop'>Shop</Link>
          <Link className='option' to='/shop'>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
