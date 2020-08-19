import React from "react";
import "./Navigation.styles.scss";

const Navigation = ({ onRouteChange, isSignedIn }) =>
  isSignedIn ? (
    <nav className="Navigation">
      <p className="link" onClick={() => onRouteChange("signout")}>
        Sign Out
      </p>
    </nav>
  ) : (
    <nav className="Navigation">
      <p className="link" onClick={() => onRouteChange("signin")}>
        Sign In
      </p>
    </nav>
  );

export default Navigation;
