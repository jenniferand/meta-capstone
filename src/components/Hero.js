import mobileHeroImage from '../assets/restaurantfood.jpg';
import desktopHeroImage1 from '../assets/restaurant.jpg';
import desktopHeroImage2 from '../assets/restaurantfood.jpg';
import desktopHeroImage3 from '../assets/marioandadrianhero.jpg';

function Hero() {
    return (
        <div className="hero">
            <div id="hero-text-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button class="button">Book a Table</button>
            </div>
            <div id="hero-">
                <img src={mobileHeroImage} alt="Bruschetta at Little Lemon" class="hero-image mobile-only"/>
                <div id='desktop-images'>
                    <img src={desktopHeroImage1} alt="Outdoor seating at Little Lemon" class="hero-image desktop-only"/>
                    <img src={desktopHeroImage2} alt="Bruschetta at Little Lemon" class="hero-image desktop-only"/>
                    <img src={desktopHeroImage3} alt="Chefs laughing at Little Lemon" class="hero-image desktop-only"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;