import airbnbLogo from "../assets/airbnb-logo.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <img
                        className="airbnbLogo"
                        src={airbnbLogo}
                        alt="Airbnb Logo"
                    />
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
