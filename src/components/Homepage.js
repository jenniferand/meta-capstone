import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Specials from './Specials';
import AboutUs from './AboutUsHome';

function HomePage() {
    return (
        <div className="grid-container">
            <Header className="header" />
            <Hero
                buttonText="Book a Table"
                buttonLink="/booking"
            />
            <Specials />
            <Testimonials />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;
