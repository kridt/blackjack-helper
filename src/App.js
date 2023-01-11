import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import PlayingCard from "./components/PlayingCard";

function App() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    axios.get("/playingCards.json").then((res) => setDeck(res.data.deck));
  }, []);

  console.log(deck);
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(13, 1fr)",
          gap: "1em",
          scale: "0.5",
        }}
      >
        {deck?.map((card) => {
          return <PlayingCard cardValue={card.rank} cardImg={card.img} />;
        })}
      </div>
    </div>
  );
}

export default App;
