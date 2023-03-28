import airbnbLogo from "../assets/logos/airbnb-logo.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <a href="#">
                        <img
                            className="airbnbLogo"
                            src={airbnbLogo}
                            alt="Airbnb Logo"
                        />
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
