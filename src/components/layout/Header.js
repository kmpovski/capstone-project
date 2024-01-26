import './Header.css';
import logo from '../../assets/Logo.svg';
import Nav from './Nav';

const Header = () => {
    return (
      <header className='content'>
        <img src={logo} alt='Logo Little Lemon' />
        <Nav />
      </header> 
    );
}

export default Header;