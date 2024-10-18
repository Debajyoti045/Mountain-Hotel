import React from "react";
import UpperNav from "./UpperNav";
import "../../CSS/Home.css";
import MainNav from "./MainNav";
import { upperSmalltext, upperBigText } from "../data/Data";
import ParaMeterSection from "./ParaMeterSection";
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
    </div>
  );
};

export default Home;
