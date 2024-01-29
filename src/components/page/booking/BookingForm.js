
import { useState } from "react";
import './BookingForm.css';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState(new Date().toISOString().substring(0,10));
    const [time, setTime] = useState([""]);
    const [nbGuests, setNbGuests] = useState(2);
    const [occasion, setOccasion] = useState("birthday");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({date, time, nbGuests, occasion});
    };

    return (
      <>
        <h3 className="section-title content">Book Now</h3>
        <form style={{display: "grid", maxWidth: "200", gap: "20"}} className="content" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value)}} required >
            {availableTimes?.map(currentTime => <option key={currentTime}>{currentTime}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={nbGuests} onChange={(e) => {setNbGuests(e.target.value)}} required />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}} required >
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
                <option value='Other'>Other</option>
            </select>
            <input type="submit" className="btn-primary submit-btn" value="Make Your reservation" />
        </form>
      </>
    );
}

export default BookingForm;