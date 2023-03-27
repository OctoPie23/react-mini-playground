import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Handles from "./components/Handles";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="card">
                <Info />
                <About />
                <Interests />
                <Handles />
            </div>
        </div>
    );
}

export default App;
