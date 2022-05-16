import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <img style={{paddingTop:'5px'}} className="Tilt-inner pa3" alt="logo" src={brain} />
      </Tilt>
    </div>
  );
};

export default Logo;
