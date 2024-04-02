import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import BookingForm from './BookingForm';

function BookingPage() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmation = () => {
        // preventDefault();
        setShowConfirmation(true);
    }

    return (
        <div className="grid-container">
            <Header className="header" />
            <Hero
                buttonText="Home"
                buttonLink="/"
            />
            {!showConfirmation ? (
                <div>
                    <BookingForm />
                </div>
            ) : (
                <div>
                    <h2>Reservation Confirmed!</h2>
                    <p>Thanks for choosing to dine with us at Little Lemon! Your [Table preference] table is confirmed for [Date] at [Time] for [Number of Diners] diners. Additional comments and occasions will be reviewed by our front of house.</p>
                    <p>A confirmation email has been sent to [Email].</p>
                    <p>We look forward to welcoming you!</p>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default BookingPage;
