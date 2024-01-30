import './WorkingOn.css';
import { Link } from 'react-router-dom';

const WorkingOn = () => {
    return (
        <>
            <h3 className="section-title content">We are working on it !</h3>
            <p className="sorry-msg content" >Dear customer, we apologize but this page is not available currently, we are working
            on it to offer you the best possible experience</p>
            <div className="btn-primary go-back-btn"><Link to="/home">Go back to homepage</Link></div>
        </>
    );
}

export default WorkingOn;