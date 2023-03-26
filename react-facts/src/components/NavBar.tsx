import "./NavBar.css";
import reactLogo from "../assets/react.svg";

const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="vitelogo" />
                <ul className="nav-items">
                    <li>React Facts - Project 1</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
