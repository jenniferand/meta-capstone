import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TestimonialsCard({ name, image, stars, text }) {
    return (
        <div className="testimonials-card">
            <div className="testimonials-card-header">
                <img src={image} alt="Customer" />
                <div className="testimonials-card-header-right">
                    <h3>{name}</h3>
                    <div className="stars">
                        {Array(stars).fill(0).map((_, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} />
                        ))}
                    </div>
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
};

export default TestimonialsCard;
