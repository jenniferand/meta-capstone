function SpecialsCard({ image, title, price, description }) {
    return (
        <div className="specials-card">
            <img src={image} alt={title} />
            <div className="specials-card-header">
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
            <p>{description}</p>
        </div>
    )
};

export default SpecialsCard;