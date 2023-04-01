import Navbar from "./components/Navbar";
import Card from "./components/Card";
import TravelData from "./components/TravelData";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            {TravelData.map((card) => {
                return (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        location={card.location}
                        googleMapsUrl={card.googleMapsUrl}
                        startDate={card.startDate}
                        endDate={card.endDate}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                );
            })}
        </div>
    );
}

export default App;
