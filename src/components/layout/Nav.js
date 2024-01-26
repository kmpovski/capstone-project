import './Nav.css';
import routing from '../../utils/routing';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className='nav-bar'>
        <ul>
          {routing.map((route) => 
            <li key={route.name}>
              <Link to={route.link}>{route.name}</Link>
            </li>
          )}
        </ul>
      </nav>
    );
}

export default Nav;