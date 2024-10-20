import React from 'react';
import Slider from 'react-slick'; 
import "../../CSS/RoomSlider.css"
import { afterMainServicessmallText, afterMainServicesbigText, afterMainSerivicessideText, Rooms, availability } from '../Data/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

const RoomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, 
    slidesToScroll: 1,
    arrows: true,
    centerMode: true, 
  };

  return (
    <div className="room-section">
      <div className="room-header">
        <h2 className="after-main-services-big">{afterMainServicesbigText}</h2>
        <p className="after-main-services-small">{afterMainServicessmallText}</p>
        <div className="side-text">{afterMainSerivicessideText}</div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {Rooms.map((room) => (
            <div key={room.id} className="room-card"  >
              <div className="room-info">
                <span className="room-price">{room.price}</span>
                <h3 className="room-heading">{room.Heading}</h3>
                <div className="room-details">
                  <div className="detail-item">
                    <img src={room.size.icon} alt="size icon" />
                    <span>{room.size.num}</span>
                  </div>
                  <div className="detail-item">
                    <img src={room.guests.icon} alt="guests icon" />
                    <span>{room.guests.num}</span>
                  </div>
                  <div className="detail-item">
                    <img src={room.bed.icon} alt="bed icon" />
                    <span>{room.bed.num}</span>
                  </div>
                  <div className="detail-item">
                    <img src={room.bathroom.icon} alt="bathroom icon" />
                    <span>{room.bathroom.num}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="availability-section">
        {availability.map((item) => (
          <div key={item.id} className="availability-item">
            <label>{item.title}</label>
            {item.type === 'Date' && <input type="date" />}
            {item.type === 'num' && <input type="number" min="1" />}
            {item.type === 'button' && <button>Check Availability</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSlider;
