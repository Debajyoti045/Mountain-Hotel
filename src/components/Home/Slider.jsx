import React from 'react';
import { sliderImages } from '../Data/Data'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../CSS/Slider.css"; 

const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,  
  };

  return (
    <div className="slider-container" style={{ padding: '20px' }}>
      <Slider {...settings}>
        {sliderImages.map((image) => (
          <div key={image.id} className="slider-image">
            <img src={image.src} alt={`Slide ${image.id}`} style={{ width: '500px', height: '80vh' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
