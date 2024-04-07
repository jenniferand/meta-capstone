import { useState, useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});

  const initialState = [
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];

  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case "remove":
        return state.filter((time) => time !== action.payload);
      default:
        return state;
    }
  }

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialState);

  const updateTimes = (selectedDate) => {
    dispatch({ type: "remove", payload: selectedDate });
  };

  const handleConfirmation = (bookingDetails) => {
    setBookingDetails(bookingDetails);
    setShowConfirmation(true);
  };

  const newReservation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="grid-container">
      <Header className="header" />
      <Hero buttonText="Home" buttonLink="/" />
      {!showConfirmation ? (
        <div>
          <BookingForm availableTimes={availableTimes} onTimeSlotUpdate={updateTimes} onSubmit={handleConfirmation} />
        </div>
      ) : (
        <div className="booking-confirmation">
          <div>
            <h2 className="page-header">Reservation Confirmed!</h2>
            <p>
              Thanks, {bookingDetails.name}, for choosing to dine with us at Little Lemon! Your {bookingDetails.tablePref} table is confirmed for {bookingDetails.date} at {bookingDetails.time} for {bookingDetails.guests} diners. Additional comments and occasions will be reviewed by our front of house.
            </p>
            <p>A confirmation email has been sent to {bookingDetails.email}.</p>
            <p>We look forward to welcoming you!</p>
          </div>
          <button className="button" id="button-large">Amend</button>
          <button className="button" id="button-large">Cancel</button>
          <button className="button" id="button-large" onClick={newReservation}>New Reservation</button>
          <button className="button" id="button-large">Browse our Menu</button>
          </div>
      )}
      <Footer />
    </div>
  );
}

export default BookingPage;
