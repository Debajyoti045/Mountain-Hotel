import React from "react";
import UpperNav from "./UpperNav";
import "../../CSS/Home.css";
import MainNav from "./MainNav";
import { upperSmalltext, upperBigText } from "../Data/Data.jsx"
import ParaMeterSection from "./ParaMeterSection";
import TextSection from "./TextSection";
import Slider from "./Slider.jsx";
import Services from "./Services.jsx";
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
          <div className="small-text">{upperSmalltext}</div>
          <div className="big-text">{upperBigText}</div>
        </div>
        <ParaMeterSection/>
      </div>
      <TextSection/>
      <Slider/>
      <Services/>
    </div>
  );
};

export default Home;
