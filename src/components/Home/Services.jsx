import React from "react";
import "../../CSS/Services.css";
import {afterSliderSmallText,afterSliderBigText,services} from "../Data/Data.jsx"
const Services = () => {
  return (
    <section className="holiday-section">
      <h2 className="small-text2">{afterSliderSmallText}</h2>
      <h1 className="big-text2">{afterSliderBigText}</h1>
      <div className="card-container">
        {services.map((service) => (
          <div className="card" key={service.id}>
            <img src={service.img} alt={service.mainTitle} />
            <div className="card-info">
              <span className="price">{service.price}</span>
              <p className="small-title">{service.smallTitle}</p>
              <h3 className="main-title">{service.mainTitle}</h3>
              <a href={service.link} className="discover-link">
                Discover Trip
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
