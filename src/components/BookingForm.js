import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from 'react';
import { validateEmail, validateDate, defineTime } from '../utils';

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState({ value: "", isTouched: false});
  const [guests, setGuests] = useState(2);
  const [datetime, setDatetime] = useState({ value: null, isTouched: false});
  const [tablePref, setTablePref] = useState("Inside");
  const [occasion, setOccasion] = useState("None");
  const [comments, setComments] = useState("");

  const getIsFormValid = () => {
    return (
      name &&
      validateEmail(email.value) &&
      validateDate(datetime.value) &&
      guests
    );
  }

  const clearForm = () => {
    setName("");
    setEmail({ value: "", isTouched: false});
    setGuests(2);
    setDatetime({ value: null, isTouched: false});
    setTablePref("Inside");
    setOccasion("None");
    setComments("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    console.log('Form submitted!')
  }

  const minTime = defineTime(11);

  const maxTime = defineTime(21);

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
        />
        <label htmlFor="email">Email</label>
        {email.isTouched && !validateEmail(email.value) ? (<p style={{color: "red"}}>Please enter a valid email address.</p>) : null}
        <input
          className="input"
          type="email"
          id="email"
          required={true}
          value={email.value}
          onChange={e => setEmail({ ...email, value: e.target.value })}
          onBlur={() => setEmail({ ...email, isTouched: true })}
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
        />
        <label htmlFor="res-datetime">Date and Time</label>
        {datetime.isTouched && !validateDate(datetime.value) ? (<p style={{color: "red"}}>The selected slot is in the past.</p>) : null}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            id="res-datetime"
            label=""
            ampm={false}
            views={['year', 'month', 'day', 'hours', 'minutes']}
            minDate={new Date()}
            minTime={minTime}
            maxTime={maxTime}
            timeSteps={{ minutes: 30 }}
            skipDisabled={true}
            sx={{ marginBottom: '1rem' }}
            required={true}
            value={datetime.value}
            onChange={e => setDatetime({ ...datetime, value: e, isTouched: true})}
          />
        </LocalizationProvider>
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
