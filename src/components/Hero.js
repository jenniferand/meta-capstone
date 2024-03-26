import { Link } from 'react-router-dom';
import mobileHeroImage from '../assets/restaurantfood.jpg';
import desktopHeroImage1 from '../assets/restaurant.jpg';
import desktopHeroImage2 from '../assets/restaurantfood.jpg';
import desktopHeroImage3 from '../assets/marioandadrianhero.jpg';

function Hero({ buttonText, buttonLink }) {
    return (
        <div class="hero">
            <div id="hero-text-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to={buttonLink}>
                    <button class="button">{buttonText}</button>
                </Link>
            </div>
            <div id="hero-">
                <img src={mobileHeroImage} alt="Bruschetta at Little Lemon" class="hero-image mobile-only" />
                <div id='desktop-images'>
                    <img src={desktopHeroImage1} alt="Outdoor seating at Little Lemon" class="hero-image desktop-only" />
                    <img src={desktopHeroImage2} alt="Bruschetta at Little Lemon" class="hero-image desktop-only" />
                    <img src={desktopHeroImage3} alt="Chefs laughing at Little Lemon" class="hero-image desktop-only" />
                </div>
            </div>
        </div>
    );
}

export default Hero;