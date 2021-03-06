import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="buttons">
            <Link to="/register" className="btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
