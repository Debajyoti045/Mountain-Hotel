import React from "react";
import {RoomsAfterSmallText, RoomsAfterBigText, ActivitiesDesc} from "../Data/Data.jsx";
import "../../CSS/Activities.css";

const Activities = () => {
  return (
    <div className="activities">
      <div className="activity-text-section">
        <div className="activity-small-text">{RoomsAfterSmallText}</div>
        <div className="activity-big-text">{RoomsAfterBigText}</div>
      </div>

      <div className="activity-card-section">
        {ActivitiesDesc.map((activity) => (
          <div key={activity.id} className="activity-card">
            <img src={activity.img} alt={activity.title} className="activity-image"/>
            <div className="activity-info">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-desc">{activity.desc}</p>
              <a href={activity.link} className="activity-link">Discover More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
