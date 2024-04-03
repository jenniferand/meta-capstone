import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
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
    "21:00"
  ]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTimeSlotUpdate = (updatedTimes) => {
    setAvailableTimes(updatedTimes);
  };

  const handleConfirmation = () => {
    // preventDefault();
    setShowConfirmation(true);
  };

  return (
    <div className="grid-container">
      <Header className="header" />
      <Hero buttonText="Home" buttonLink="/" />
      {!showConfirmation ? (
        <div>
          <BookingForm availableTimes={availableTimes} onTimeSlotUpdate={handleTimeSlotUpdate}/>
        </div>
      ) : (
        <div>
          <h2>Reservation Confirmed!</h2>
          <p>
            Thanks for choosing to dine with us at Little Lemon! Your [Table
            preference] table is confirmed for [Date] at [Time] for [Number of
            Diners] diners. Additional comments and occasions will be reviewed
            by our front of house.
          </p>
          <p>A confirmation email has been sent to [Email].</p>
          <p>We look forward to welcoming you!</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default BookingPage;
