import './Footer_mobile.css';
import './Footer_desktop.css';
import routing from '../../utils/routing';
import logo from '../../assets/LL20@4x_u.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="content grid">
          <img 
            className="footer-logo" 
            src={logo} 
            alt="Little Lemon" 
          />
          <nav className="doormat-nav">
            <h4>Doormat Navigation</h4>
            <ul>
              {routing.map((route) => 
                <li key={route.name}>
                  <Link to={route.link}>{route.name}</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="contact">
            <h4>Contact</h4>
            <address><a href="mailto:customer@littlelemon.com">littlelemon@gmail.com</a></address>
            <a href="tel:+35319058777"><em>01-905 8777</em> </a>
          </div>
          <div className="social-media">
            <h4>Social Media Links</h4>
            <div className="social-links">
              <a href={'https://www.facebook.com'}><FontAwesomeIcon icon={faFacebook} size='lg'/> </a>
              <a href={'https://www.whatsapp.com'}><FontAwesomeIcon icon={faXTwitter} size='lg'/> </a>
              <a href={'https://www.instagram.com'}><FontAwesomeIcon icon={faInstagram} size='lg'/> </a>
              <a href={'https://www.youtube.com'}><FontAwesomeIcon icon={faYoutube} size='lg'/> </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;