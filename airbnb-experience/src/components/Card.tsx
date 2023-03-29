import "./Card.css";

interface CardProps {
    id: number | string;
    title: string;
    price: number;
    coverImg: string;
    stats: {
        rating: number;
        reviewCount: number;
    };
    location: string;
    openSpots: number;
}

const Card = (props: CardProps) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {/* if the openSpots is 0 then render sold out or else if location is online then render online else render nothing */}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.coverImg} alt="card image" />
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <span> {props.stats.rating}</span>
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-description">{props.title}</p>
            <p className="price">
                <strong>From ${props.price} </strong>/ person
            </p>
        </div>
    );
};

export default Card;
