import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardData from "./components/CardData";

import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Hero />
            <section className="cards-list">
                {CardData.map((card) => {
                    // passing all the card property in the spread operator to prevent from clutter in the props
                    return <Card key={card.id} {...card} />;
                })}
            </section>
        </div>
    );
}

export default App;
