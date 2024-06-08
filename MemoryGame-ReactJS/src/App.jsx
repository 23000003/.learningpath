import { useState , useEffect } from "react"
import './App.css'

async function FetchCardData(level){

  let cards = [];

  for (let i = 1; i <= 6 * level; i++){
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

let x = 1;

function FetchData(){

  const [cards, setCards] = useState([]);
  const [level, levelState] = useState(1);
  const [noClicks, clickState] = useState(0);
  const [score, scoreState] = useState(0);
  const [clickedAlready, setClickedAlready] = useState(false);
  const [GameOver, GameOverState] = useState(false);
  const [containerWidth, setContainerWidth] = useState('30%');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCards = await FetchCardData(level);
      setCards(fetchedCards);
    };
    fetchData();
  },[level]); // if level is changed then add more cards


  const ImageMemory = (c) => {
    console.log(c.click);
    if (c.click === true) {
      console.log("Image already clicked");
      if(level === 1){
        setCards((prevCards) =>
          prevCards.map((newCard) =>
            newCard.id === c.id ? { ...newCard, click: false } : newCard  // to assign back to false
          )
        );
      }
      else{
        levelState(1);
      }
      setContainerWidth('30%');
      clickState(0);
      ShuffleCards();
      scoreState(0); // resets these 3 when click is true (if already clicked within the level) 
      setClickedAlready(true);
    } 
    else {
      setCards((prevCards) =>
        prevCards.map((newCard) =>
          newCard.id === c.id ? { ...newCard, click: true } : newCard  // to assign if its clicked now
        )
      );
      scoreState(score + 1);
      setClickedAlready(false);
      GameOverState(false);
    }
  };
  

  const ShuffleCards = () => { //shuffles every click... only renders the component
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


  const handleCardClick = (c) => {
    ImageMemory(c);
    if(c.click === false){
      ShuffleCards();
      clickState(noClicks + 1);
    }
  };

  // Renders/calls the fetch data as level is changed the 
  useEffect(() =>{
    console.log(noClicks);
    
    if(noClicks === 5 * x){
      if(level === 3){
        GameOverState(true);
        setContainerWidth('30%');
        clickState(0);
        ShuffleCards();
        scoreState(0);  
        levelState(1);
      }else{
        levelState(level + 1);
        console.log(level);
        clickState(0);
        x++;
        setContainerWidth('50%');
      }
    }
  },[noClicks]);

  return (
    <>
    <div className="Labels">
      <h2>POKEMON</h2>
      <h2>Card Memory Game</h2>
      <h2>Level {level} / 3</h2>
      <h2>Score: {score}</h2>
      {clickedAlready && <h2 style={{ color: "red" }}>Card Already Clicked!</h2>}
      {GameOver && <h2 style={{ color: "green" }}>Good Job!</h2>}
    </div>
    <div className="Card-container" style={{width: containerWidth}}>
      {cards.map((c, index ) => (
        <div key = {index} className="Card" onClick={() => handleCardClick(c)}>
          <img src={c.image}></img>
          {/* <p>{c.id}</p> */}
          <p>{c.name}</p>
        </div>
      ))}
    </div>
    </>
  );
}

function App(){

  return(
    <div className="container">
      <FetchData/>
    </div>
  );
}

export default App