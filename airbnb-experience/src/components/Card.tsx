import "./Card.css";

const Card = (props: any) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.coverImg} alt="card image" />
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <span> {props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-description">{props.description}</p>
            <p className="price">
                <strong>From ${props.price} </strong>/ person
            </p>
        </div>
    );
};

export default Card;
