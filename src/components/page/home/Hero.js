import { Link } from 'react-router-dom';
import restaurantHero from '../../../assets/restaurantfood.jpg';
import './Hero_desktop.css';
import './Hero_mobile.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="content grid">
        <div className="description">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p> We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.</p>
          <Link to="/book" className="btn-primary">
            Reserve a table
          </Link>
        </div>
        <img className="hero-img" src={restaurantHero} alt="Little Lemon Restaurant" 
        />
      </div>
    </section>
  );
};

export default Hero;
