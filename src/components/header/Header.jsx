import React from "react";
import "./header.scss";
import Logo from "../../image/logo-light.webp";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {GrBasket} from 'react-icons/gr'

const Header = () => {
  console.log("Header Yuklendi");
  return (
    <div className="header">
      <div className="meriCont">
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="menu">
            <ul className="d-flex m-0 p-0 justify-content-center list-unstyled">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/shop"> Shop</Link>
              </li>
              <li>
                <Link to="pages">Pages</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="products"><i className="fa fa-shopping-basket"></i>shop</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <input placeholder="Search" type="text" />
            <FaSearch className="searchIco" />
          </div>
          <div className="basket-content">
          <div className="basket">
        <GrBasket className="grIcon"/>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
