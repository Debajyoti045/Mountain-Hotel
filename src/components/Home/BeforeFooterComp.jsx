import React from 'react'
import "../../CSS/BeforeFooterComp.css"
import {ActivitiesAfterSmallText,ActivitiesAfterBigText,ActivitiesAfterImage} from "../Data/Data.jsx"
const BeforeFooterComp = () => {
  return (
    <div className="activities-after-container" style={{ backgroundImage: `url(${ActivitiesAfterImage})` }}>
      <div className="text-overlay">
        <h1 className="small-text">{ActivitiesAfterSmallText}</h1>
        <h2 className="big-text">
          {ActivitiesAfterBigText}
        </h2>
        <div className="check-info">
          <div className="check-in">
            <p>Check In</p>
            <p>2024-10-20</p>
          </div>
          <div className="check-out">
            <p>Check Out</p>
            <p>2024-10-21</p>
          </div>
          <div className="guests">
            <p>Guests</p>
            <p>1 Room, 1 Adult, 0 Children</p>
          </div>
        </div>
        <button className="check-availability-button">Check Availability</button>
      </div>
    </div>
  )
}

export default BeforeFooterComp
