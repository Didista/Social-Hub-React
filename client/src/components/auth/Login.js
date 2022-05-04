import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillFilePersonFill } from "react-icons/bs";
import axios from "axios";
import "./Login-Register.css";
import "@fontsource/open-sans";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const { email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const credential = {
      email,
      password,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(credential);

      const response = await axios.post("/api/auth", body, config);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      <h1 className=" text-primary">Sign In</h1>
      <hr class="line" />
      <p className="lead">
        <BsFillFilePersonFill /> Sign into your account
      </p>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            minLength="6"
            autoComplete="on"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
