import React from 'react';
import { 
    footerLeftMainTitle, 
    footerLeftDesc, 
    footerLeftIcons, 
    middleFooterTitle, 
    middleFooter, 
    middleLink, 
    footerRightTitle, 
    connectedIcons, 
    footerContensLeft 
} from '../Data/Data';
import '../../CSS/Footer.css'; 

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-left">
        <h2>{footerLeftMainTitle}</h2>
        <p>{footerLeftDesc}</p>
        <div className="footer-icons">
          {footerLeftIcons.map(icon => (
            <img key={icon.id} src={icon.icon} alt="Payment method" />
          ))}
        </div>
      </div>

      <div className="footer-middle">
        <h3>{middleFooterTitle}</h3>
        <ul>
          {middleFooter.map(item => (
            <li key={item.id}><strong>{item.type}:</strong> {item.value}</li>
          ))}
        </ul>
        {middleLink.map(link => (
          <a key={link.id} href={link.link} className="footer-link">{link.value}</a>
        ))}
      </div>

      <div className="footer-right">
        <h3>{footerRightTitle}</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Subscribe</button>
        </form>
        <div className="privacy-policy">
          <input type="checkbox" id="privacyPolicy" />
          <label htmlFor="privacyPolicy">   I agree to the Privacy Policy</label>
        </div>
        <div className="social-icons">
          <span>Stay Connected: </span>
          {connectedIcons.map(icon => (
              <a key={icon.id} href={icon.link} target='_blank'>
                <img src={icon.icon} alt="" />
              </a>
          ))}
        </div>
      </div>
    </footer>
    <footer className="footer">
    <div className="footer-bottom">
        {footerContensLeft.map(content => (
          <a key={content.id} target='_blank' href={content.link}>{content.value} </a>
        ))}
      </div>
      <div>© Copyright CozyStay WordPress Theme for Hotel Booking.</div>
    </footer>
    </>
  );
};

export default Footer;
