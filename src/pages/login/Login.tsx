import React from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import logo from "../../assets/logo.png";
import loginBanner from "../../assets/login-banner.png";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left-logo">
          <img src={logo} alt="" />
        </div>
        <div className="login-left-banner">
          <img src={loginBanner} alt="" />
        </div>
      </div>
      <div className="login-right">
        <form action="">
          <h2>Login to</h2>
          <h2>Linkdao Admin</h2>

          <input id="email" type="text" placeholder="Enter e-mail address" />
          <input
            id="password"
            type="password"
            placeholder="Enter login password"
          />
          <a href="#">
            <p>Forgot password?</p>
          </a>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
