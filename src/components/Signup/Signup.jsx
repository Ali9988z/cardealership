import React from "react";
import { FaGoogle } from "react-icons/fa";
import "../Signup/Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign up</h2>

        <form>
          <label>Full name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>E-mail</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <div className="password-field">
            <input type="password" placeholder="Enter your password" required />
            <span className="show-password">👁️</span>
          </div>

          <label>Confirm password</label>
          <div className="password-field">
            <input type="password" placeholder="Enter your confirm password" required />
            <span className="show-password">👁️</span>
          </div>

          <button type="submit" className="signup-btn">Sign up</button>
        </form>

        <p className="or-divider">or</p>

        <button className="google-signup">
          <FaGoogle /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
