import MarioAndAdrianImage from '../assets/marioandadrianaboutus.jpg';
import ChefImage from '../assets/chef.jpg';

function AboutUs() {
    return (
        <div className="about-us-grid">
            <div className="about-us-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Brothers Adrian and Mario grew up in Sicily. Aged 18 and 20, they moved to the US with a dream to bring authentic Mediterranean cuisine to hungry Chicagoans. Their menu is largely inspired by a handwritten cookbook found in their late grandmother’s home. They hope to keep her memory alive through their cooking.</p>
            </div>
            <div className="about-us-images">
                <img src={ChefImage} alt="Chef plating food." id="chef-image"/>
                <img src={MarioAndAdrianImage} alt="Mario and Adrian laughing." id="mario-and-adrian-image"/>
            </div>
        </div>
    )
};

export default AboutUs;