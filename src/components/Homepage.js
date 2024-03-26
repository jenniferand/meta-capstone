import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Main from './Main';

function HomePage() {
    return (
        <div className="grid-container">
            <Header className="header" />
            <Hero
                buttonText="Book a Table"
                buttonLink="/booking"
            />
            <Main/>
            <Footer />
        </div>
    );
}

export default HomePage;
