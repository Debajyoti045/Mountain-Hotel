import React from 'react';
import { afterServicesSmallText, afterServicesBigText, mainServices, mainServicesSideImages } from "../Data/Data.jsx";
import "../../CSS/Eminities.css";

const Eminities = () => {
  return (
    <section className="eminities-section">
      <div className="eminities-header">
        <h4>{afterServicesSmallText}</h4>
        <h2>{afterServicesBigText}</h2>
      </div>
      
      <div className="eminities-content">
        <div className="eminities-grid">
            <div className="services-column">
            {mainServices.slice(0, 3).map(service => (
              <div key={service.id} className="service-item">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="services-column">
            {mainServices.slice(3, 6).map(service => (
              <div key={service.id} className="service-item">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="image-column">
            <div className="image-item">
              <img src={mainServicesSideImages[0].src} alt="Service 1" className="service-image" />
            </div>
            <div className="image-item">
              <img src={mainServicesSideImages[1].src} alt="Service 2" className="service-image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Eminities;
