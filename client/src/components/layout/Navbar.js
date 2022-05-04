import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiLogIn } from "react-icons/fi";
import { GiArchiveRegister } from "react-icons/gi";
import { BsFillChatRightTextFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <Link to="/">
            <span className=" name">SociaL HUB</span>
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/login"
          >
            <FiLogIn className="emoji" />
            <span className="hide-sm">Log In</span>
          </Link>
        </li>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/register"
          >
            <GiArchiveRegister className="emoji" />
            <span className="hide-sm">Sign Up</span>
          </Link>
        </li>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/post"
          >
            <BsFillChatRightTextFill className="emoji" />
            <span className="hide-sm">Posts</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
