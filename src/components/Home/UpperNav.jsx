import React from "react";
import { UpperNavCountry, upperNav } from "../Data/Data.jsx";
import "../../CSS/UserNav.css"
const UpperNav = () => {
  return (
    <div className="upper-nav">
      <div className="address">
        {UpperNavCountry}
      </div>
      <div className="contact">
        {upperNav.map((detail, index) => (
          <span key={index}>
            {detail.type ? `${detail.type} ` : ''}{detail.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UpperNav;
