import React from 'react'
import "../../CSS/ParameterSection.css";
import { parameters } from "../Data/Data";
const ParaMeterSection = () => {
  return (
    <div className="parameter-section">
      {parameters.map(param => (
        <div key={param.id} className="parameter-item">
          <div className="param-value">{param.val}</div>
          <div className="param-text">{param.text}</div>
        </div>
      ))}
    </div>
  )
}

export default ParaMeterSection
