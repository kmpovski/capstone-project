import './Header_mobile.css';
import './Header_desktop.css';
import { useState } from 'react';
import logo from '../../assets/Logo.svg';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const hideOrShowNavBar = () => {
    const navBarEltStyle = document.getElementsByClassName("nav-bar")[0].style;
    navBarEltStyle.display = navBar ? "" : "block";
    setTimeout(() => {
      navBarEltStyle.visibility = navBar ? "" : "visible";
      navBarEltStyle.opacity = navBar ? "" : "1";
    }, 200);
    setNavBar(!navBar);
  }
    return (
      <header className='content'>
        <FontAwesomeIcon className="hamburger-icon-mobile" icon={faBars} size="lg" onClick={hideOrShowNavBar}/>
        <img src={logo} alt='Logo Little Lemon' />
        <Nav />
      </header> 
    );
}

export default Header;