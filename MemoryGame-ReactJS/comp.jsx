import { useState , useEffect } from "react"
import './App.css'

async function FetchCardData(level){
  let cards = [];

  for (let i = 1; i < 6 * level; i++){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const datajson = await data.json();
    const id = datajson.id;
    const name = datajson.name;
    const image = datajson.sprites.front_default;
    const click = false;

    cards.push({id, name, image, click});
  }

  return cards;
}

function FetchData(){
  const [cards, setCards] = useState([]);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCards = await FetchCardData(level);
      setCards(fetchedCards);
    };
    fetchData();
  }, [level]);

  const ImageMemory = (c) => {
    if (c.click === true) {
      console.log("Image already clicked");
    } else {
      setCards((prevCards) =>
        prevCards.map((newCard) =>
          newCard.id === c.id ? { ...newCard, click: true } : newCard
        )
      );
    }
  };

  const handleCardClick = (c) => {
    ImageMemory(c);
  };

  const ShuffleCards = () => {
    setCards((prevCards) => {
      const shuffledCards = [...prevCards];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [
          shuffledCards[j],
          shuffledCards[i],
        ];
      }
      return shuffledCards;
    });
  };

  useEffect(() => {
    if (noClicks === 3) {
      setLevel(level + 1);
      setNoClicks(0);
    }
  }, [noClicks, level]);

  const [noClicks, setNoClicks] = useState(0);

  const handleCardClickAndUpdate = (c) => {
    if (c.click === false) {
      ShuffleCards();
      setNoClicks(noClicks + 1);
      handleCardClick(c);
    }
  };

  return (
    <div className="Card-container">
      {cards.map((c, index ) => (
        <div key = {index} className="Card" onClick={() => handleCardClickAndUpdate(c)}>
          <img src={c.image} alt={c.name}></img>
          <p>{c.id}</p>
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
}

function App(){

  return(
    <div className="container">
      <div className="Labels">
        <h2>Card Memory Game</h2>
      </div>
      <FetchData/>
    </div>
  );
}

export default App;
