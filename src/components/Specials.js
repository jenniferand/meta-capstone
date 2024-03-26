import BruschettaImage from '../assets/bruschetta.svg';
import GreekSaladImage from '../assets/greeksalad.jpg';
import LemonDessertImage from '../assets/lemondessert.jpg';

function Specials() {
    return (
        <div class="specials-grid">
            <div class="specials-header">
                <h1>Specials</h1>
                <button class="button">Online Menu</button>
            </div>
            <div class="specials-main">
                <div class="specials-card">
                    <img src={GreekSaladImage} alt="Greek Salad"/>
                    <div class="specials-card-header">
                        <h3>Greek Salad</h3>
                        <span>$12.99</span>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                <div class="specials-card">
                    <img src={BruschettaImage} alt="Bruschetta"/>
                    <div class="specials-card-header">
                        <h3>Bruschetta</h3>
                        <span>$5.99</span>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div class="specials-card">
                    <img src={LemonDessertImage} alt="Lemon Dessert"/>
                    <div class="specials-card-header">
                        <h3>Lemon Dessert</h3>
                        <span>$5.00</span>
                    </div>
                    <p>This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
            </div>
        </div>
    );
}

export default Specials;