import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from "@mui/x-date-pickers";

function BookingForm() {

  const minTime = new Date()
  minTime.setHours(11)
  minTime.setMinutes(0);
  minTime.setSeconds(0);
  minTime.setMilliseconds(0);

  const maxTime = new Date()
  maxTime.setHours(21)
  maxTime.setMinutes(0);
  maxTime.setSeconds(0);
  maxTime.setMilliseconds(0);

  return (
    <div className="booking-grid">
      <h1 className="page-header">Reserve a Table</h1>
      <form className="form">
        <label htmlFor="name">Full Name</label>
        <input className="input" type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input className="input" type="email" id="email" />
        <label htmlFor="guests">Number of Guests</label>
        <input
          className="input"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="res-datetime">Date and Time</label>
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
          />
        </LocalizationProvider>
        <div className="optional-group">
          <div className="input-container">
            <label htmlFor="table-pref">Table Preference</label>
            <select className="input" id="table-pref">
              <option>Inside</option>
              <option>Outside</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="occasion">Occasion</label>
            <select className="input" id="occasion">
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Graduation</option>
              <option>Other (Please specify below)</option>
            </select>
          </div>
        </div>
        <label htmlFor="comments">Additional Comments</label>
        <textarea className="input" id="comments"></textarea>
        <input className="button" id="button-large" type="submit" value="Confirm Reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
