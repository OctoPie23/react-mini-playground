import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="card">
                <Info />
                <About />
                <Interests />
            </div>
        </div>
    );
}

export default App;
