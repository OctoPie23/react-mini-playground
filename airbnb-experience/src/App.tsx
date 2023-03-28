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
                    return (
                        <Card
                            coverImg={card.coverImg}
                            description={card.title}
                            rating={card.stats.rating}
                            reviewCount={card.stats.reviewCount}
                            location={card.location}
                            price={card.price}
                            key={card.id}
                            openSpots={card.openSpots}
                        />
                    );
                })}
            </section>
        </div>
    );
}

export default App;
