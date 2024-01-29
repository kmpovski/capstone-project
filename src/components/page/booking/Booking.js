import { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../../utils/Api';

const Booking = () => {
    const navigate = useNavigate();
    const updateTimes = (state, date) => {
        return fetchAPI(date);
    };
    
    const initializeTimes = fetchAPI(new Date());
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if(response) {
            navigate("/reservation-confirmed");
        }
    };
    return (
        <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>
    );
}

export default Booking;