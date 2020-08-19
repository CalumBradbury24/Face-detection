import React from "react";
import "./Register.styles.scss";

const Register = ( {onRouteChange} ) => {
  return (
    <div className="form-container">
      <form className="contact-form">
        <h1 className = "contact-title">Register</h1>
        <input
          className="input-box"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
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
          value="Register"
          onClick={() => onRouteChange('home')} /*using anonymous function means this function doesn't fire whenever the component renders*/
          />        
        </span>
      </form>
    </div>
  );
};

export default Register;
