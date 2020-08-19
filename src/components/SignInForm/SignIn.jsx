import React from "react";
import "./SignIn.styles.scss";

const SignIn = ( {onRouteChange} ) => {
  return (
    <div className="form-container">
      <form className="contact-form">
        <h1 className = "contact-title">Sign In</h1>
        <input
          className="input-box"
          type="text"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="input-box"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <span className="input-button-span">
          <input className="input-button"
          type="submit" 
          value="Sign In"
          onClick={() => onRouteChange('home')} /*using anonymous function means this function doesn't fire whenever the component renders*/
          />
        <input className="input-button"
          type="submit" 
          value="Register"
          onClick={() => onRouteChange('Register')} /*using anonymous function means this function doesn't fire whenever the component renders*/
          />
        </span>
      </form>
    </div>
  );
};

export default SignIn;
