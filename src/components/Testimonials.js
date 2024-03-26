import TestimonialsCard from './TestimonialsCard';
import DanielImage from '../assets/Daniel.png';
import SarahImage from '../assets/Sarah.png';
import MargaretImage from '../assets/Margaret.png';

function Testimonials() {
    return (
        <div className="testimonials-grid">
            <h1>Testimonials</h1>
            <div className="testimonials-main">
                <TestimonialsCard
                    name="Daniel"
                    image={DanielImage}
                    stars={5}
                    text="Took my parents. We all loved our time at Little Lemon! Will be back. Thanks Adrian, Mario and team!"
                />
                <TestimonialsCard
                    name="Sarah"
                    image={SarahImage}
                    stars={4}
                    text="Great food. Looking forward to ordering some dishes for delivery!"
                />
                <TestimonialsCard
                    name="Margaret"
                    image={MargaretImage}
                    stars={5}
                    text="Wonderful home-cooked, authentic Mediterranean food."
                />
            </div>
        </div>
    );
}

export default Testimonials;