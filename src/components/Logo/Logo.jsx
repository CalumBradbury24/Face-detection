import React from "react";
import "./Logo.styles.scss";
import { ReactComponent as FaceScanner } from "../../assets/face-scanner.svg";

const Logo = () => {
  return (
      <div className="logo-container">
        <figure>
          <FaceScanner id="logo" />
        </figure>{" "}
      </div>
  );
};

export default Logo;
