import React from 'react'
import { leftMainNav, ComPanyName, rightMainNav } from "../Data/Data";
import "../../CSS/MainNav.css"
import { FaStar } from 'react-icons/fa'; 
const MainNav = () => {
  return (
    <div className="nav-container">
      <div className="left-nav">
        <ul>
          {leftMainNav.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="company-section">
        <div className="company-name">{ComPanyName}</div>
        <div className="stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>
      </div>
      <div className="right-nav">
        <ul>
          {rightMainNav.map((item) => (
            <li key={item.id}>
              {item.type === "button" ? (
                <button className="reserve-button">
                  <a href={item.path}>{item.text}</a>
                </button>
              ) : (
                <a href={item.path}>{item.text}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainNav
