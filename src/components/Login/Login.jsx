import React from "react";
import { FaGoogle } from "react-icons/fa";
import "../Login/Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <div className="password-field">
            <input type="password" placeholder="Enter your password" required />
            <span className="show-password">👁️</span>
          </div>

          <div className="forgot-password">
            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="signin-btn">Login</button>
        </form>

        <p className="or-divider">or</p>

        <button className="google-login">
          <FaGoogle /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
