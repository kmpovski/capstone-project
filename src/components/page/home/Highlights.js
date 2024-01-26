import { Link } from 'react-router-dom';
import DishCard from './DishCard';
import './Highlights_desktop.css';
import './Highlights_mobile.css';
import greekSalad from '../../../assets/greek_salad.jpg';
import bruschetta from '../../../assets/bruschetta.jpg';
import lemonDessert from '../../../assets/lemon_dessert.jpg';

const meals = [
  {
    name: 'Greek Salad',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    image: greekSalad,
    price: '$ 12.99',
  },
  {
    name: 'Bruschetta',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    image: bruschetta,
    price: '$ 5.99',
  },
  {
    name: 'Lemon Dessert',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    image: lemonDessert,
    price: '$ 5.00',
  },
];

const Highlights = () => {
  return (
    <section className="content grid highlights">
      <div className="highlights-header">
        <h3 className="section-title">Specials</h3>
        <Link className="btn-primary" to='/order'>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <DishCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default Highlights;
