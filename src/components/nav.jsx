import React from "react";
import "/styles/nav.css";
import acct from "/assets/acct.png";
import pinkcart from "/assets/pinkcart.gif";
import { BrowserRouter, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="nav">
      <div class="nav-items">
        <input type="text" class="search-box" placeholder="search"></input>
        <button>A Button On The Screan!</button>
        <img className="icons" src={acct} alt=""></img>
        <img className="icons" src={pinkcart} alt=""></img>
      </div>
      <div id="links">
        <Link className="navlink" to="/">
          <p> Home </p>
        </Link>
        <Link className="navlink" to="/shopping">
          <p> Shopping </p>
        </Link>
        <Link className="navlink" to="/about">
          <p> About Us </p>
        </Link>
        <Link className="navlink" to="/account">
          <p> Account </p>
        </Link>
        <Link className="navlink" to="/contact">
          <p> Contact </p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
