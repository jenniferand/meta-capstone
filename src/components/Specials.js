import SpecialsCard from './SpecialsCard';
import BruschettaImage from '../assets/bruschetta.svg';
import GreekSaladImage from '../assets/greeksalad.jpg';
import LemonDessertImage from '../assets/lemondessert.jpg';

function Specials() {
    return (
        <div className="specials-grid">
            <div className="specials-header">
                <h1 className="page-header">Specials</h1>
                <button className="button" id="button-small">Online Menu</button>
            </div>
            <div className="specials-main">
                <SpecialsCard
                    image={GreekSaladImage}
                    title="Greek Salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <SpecialsCard
                    image={BruschettaImage}
                    title="Bruschetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                <SpecialsCard
                    image={LemonDessertImage}
                    title="Lemon Dessert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </div>
    );
}

export default Specials;