import React from 'react'
import { afterNavBigText,afterNavSmallText } from '../Data/Data';
import "../../CSS/TextSection.css"
const TextSection = () => {
  return (
    <div className="after-nav-section">
      <div className="small-text">{afterNavSmallText}</div>
      <div className="big-text2">{afterNavBigText}</div>
    </div>
  )
}

export default TextSection
