import React from "react";
import "./Navigation.styles.scss";

const Navigation = ({ onRouteChange, route }) => {
  return (
    <nav className="Navigation">
      <p className="link" onClick={() => onRouteChange("signin")}>
        {route === "home" ? 'Sign out' : ""}
      </p>
    </nav>
  );
};

export default Navigation;
