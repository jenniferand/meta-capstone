import { useState } from 'react';
import { validateEmail } from '../utils';

function BookingForm({ availableTimes, onTimeSlotUpdate, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState({ value: "", isTouched: false });
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState({ value: null, isTouched: false });
  const [time, setTime] = useState({ value: availableTimes[0], isTouched: false });
  const [tablePref, setTablePref] = useState("Inside");
  const [occasion, setOccasion] = useState("None");
  const [comments, setComments] = useState("");

  const handleRemoveTimeSlot = (timeToRemove) => {
    onTimeSlotUpdate(timeToRemove);
  };

  const getIsFormValid = () => {
    return (
      name &&
      validateEmail(email.value) &&
      date.value &&
      guests
    );
  }

  const clearForm = () => {
    setName("");
    setEmail({ value: "", isTouched: false });
    setGuests(2);
    setDate({ value: null, isTouched: false });
    setTime({ value: availableTimes[0], isTouched: false });
    setTablePref("Inside");
    setOccasion("None");
    setComments("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    handleRemoveTimeSlot(time.value);

    const bookingDetails = {
      name,
      tablePref,
      date: date.value,
      time: time.value,
      guests,
      email: email.value
    };

    onSubmit(bookingDetails);
  };

  return (
    <div className="booking-grid">
      <h1 className="page-header">Reserve a Table</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          className="input"
          type="text"
          id="name"
          required={true}
          value={name}
          onChange={e => setName(e.target.value)}
          aria-required="true"
        />
        <label htmlFor="email">Email</label>
        {email.isTouched && !validateEmail(email.value) ? (<p style={{ color: "red" }}>Please enter a valid email address.</p>) : null}
        <input
          className="input"
          type="email"
          id="email"
          required={true}
          value={email.value}
          onChange={e => setEmail({ ...email, value: e.target.value })}
          onBlur={() => setEmail({ ...email, isTouched: true })}
          aria-required="true"
        />
        <label htmlFor="guests">Number of Guests</label>
        <input
          className="input"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          aria-required="true"
        />
        <label htmlFor="res-date">Select a Date</label>
        <input
          className="input"
          type="date"
          id="res-date"
          required={true}
          value={date.value}
          onChange={e => setDate({ ...date, value: e.target.value })}
          aria-required="true"
        />
        <label htmlFor="res-time">Select a Time</label>
        <select
          className="input"
          id="res-time"
          required={true}
          value={time.value}
          onChange={e => setTime({ ...time, value: e.target.value })}
          aria-required="true"
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        <div className="optional-group">
          <div className="input-container">
            <label htmlFor="table-pref">Table Preference</label>
            <select
              className="input"
              id="table-pref"
              value={tablePref}
              onChange={e => setTablePref(e.target.value)}
            >
              <option>Inside</option>
              <option>Outside</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="occasion">Occasion</label>
            <select
              className="input"
              id="occasion"
              value={occasion}
              onChange={e => setOccasion(e.target.value)}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Graduation</option>
              <option>Other (Please specify below)</option>
            </select>
          </div>
        </div>
        <label htmlFor="comments">Additional Comments</label>
        <textarea
          className="input"
          id="comments"
          placeholder="Special requests, dietary restrictions, etc."
          value={comments}
          onChange={e => setComments(e.target.value)}
        />
        <input className="button" id="button-large" type="submit" value="Confirm Reservation" disabled={!getIsFormValid()} />
      </form>
    </div>
  );
}

export default BookingForm;
