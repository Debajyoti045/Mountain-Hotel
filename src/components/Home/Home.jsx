import React from "react";
import UpperNav from "./UpperNav";
import "../../CSS/Home.css";
import MainNav from "./MainNav";
import { upperSmalltext, upperBigText } from "../Data/Data.jsx"
import ParaMeterSection from "./ParaMeterSection";
import TextSection from "./TextSection";
import Slider from "./Slider.jsx";
import Services from "./Services.jsx";
import RoomSlider from "./RoomSlider.jsx";
import Activities from "./Activities.jsx";
import BeforeFooterComp from "./BeforeFooterComp.jsx";
import Footer from "./Footer.jsx";
import Eminities from "./Eminities.jsx";
const Home = () => {
  return (
    <div>
      <div className="upperPortion">
        <UpperNav />
        <br />
        <br />
        <br />
        <hr className="whiteLine" />
        <MainNav />
        <div className="text-section">
          <div className="small-text1">{upperSmalltext}</div>
          <div className="big-text1">{upperBigText}</div>
        </div>
        <ParaMeterSection/>
      </div>
      <TextSection/>
      <Slider/>
      <Services/>
      <Eminities/>
      <RoomSlider/>
      <Activities/>
      <BeforeFooterComp/>
      <Footer/>
    </div>
  );
};

export default Home;
