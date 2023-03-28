import groupImage from "../assets/grouped-photos.png";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="container">
            <div className="group-image">
                <img src={groupImage} alt="Experience Images" />
            </div>
            <h1 className="title">Online Experiences</h1>
            <p className="title-description">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home. Go on experiences with our local
                hosts near you. Experience a wide variety of tours and events
                through Airbnb.
            </p>
        </section>
    );
};

export default Hero;
