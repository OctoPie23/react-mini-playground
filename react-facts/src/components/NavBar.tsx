import "./NavBar.css";
import reactLogo from "../assets/react.svg";

const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="reactlogo" />
                <h3>ReactFactzz</h3>
                <h4>React Facts - Project 01</h4>
            </nav>
        </header>
    );
};

export default NavBar;
