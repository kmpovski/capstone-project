import './Footer_mobile.css';
import './Footer_desktop.css';
import routing from '../../utils/routing';
import logo from '../../assets/LL20@4x_u.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
            <address>
              678 Pisa Ave, Chicago, IL 60611 <br/>
              (312) 593-2744 <br/>
              <a href="mailto:customer@littlelemon.com">customer@littlelemon.com</a>
            </address>
          </div>
          <div className="social-media">
            <h4>Social Media Links</h4>
            <a href={'https://www.facebook.com'}><FontAwesomeIcon icon={faFacebook} size='xl'/> </a>
            <a href={'https://www.instagram.com'}><FontAwesomeIcon icon={faInstagram} size='xl'/> </a>
            <a href={'https://www.whatsapp.com'}><FontAwesomeIcon icon={faWhatsapp} size='xl'/> </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;