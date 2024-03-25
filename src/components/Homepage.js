import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

function HomePage() {
    return (
        <div className="grid-container">
            <Header className="header" />
            <Hero />
            <Footer />
        </div>
    );
}

export default HomePage;
