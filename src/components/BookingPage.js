import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

function BookingPage() {
    return (
        <div className="grid-container">
            <Header className="header" />
            <Hero
                buttonText="Home"
                buttonLink="/"
            />
            <Footer />
        </div>
    );
}

export default BookingPage;
