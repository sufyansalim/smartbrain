import React from "react";
import Tilt from "react-tilt";
import brain from './brain.png'
import "./Logo.css"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa4"> <img style={{paddingTop:'12px'}} src={brain} alt="logo"/> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
