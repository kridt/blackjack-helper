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
      <p>123123</p>
      {deck?.map((card) => {
        return <PlayingCard cardValue={card.rank} cardImg={card.img} />;
      })}
    </div>
  );
}

export default App;
