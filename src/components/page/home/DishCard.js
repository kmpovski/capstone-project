import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './DishCard_desktop.css';
import './DishCard_mobile.css';

const DishCard = ({ meal }) => {
  return (
    <article className="dish-card">
      <div className="dish-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="dish-card-header">
        <h3>{meal.name}</h3>
        <span className="price">{meal.price}</span>
      </div>
      <div className="dish-card-body">
        <p className='dish-description'>{meal.description}</p>
        <Link to="/order">
          Order a delivery <FontAwesomeIcon icon={faBicycle} />
        </Link>
      </div>
    </article>
  );
};

export default DishCard;
