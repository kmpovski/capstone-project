import './ConfirmedBooking.css';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <>
            <h3 className="section-title content">Booking confirmed</h3>
            <p className="thanks-msg content" >Thank you for your reservation, we are looking forward to welcome you !</p>
            <div className="btn-primary go-back-btn"><Link to="/home">Go back to homepage</Link></div>
        </>
    );
}

export default ConfirmedBooking;