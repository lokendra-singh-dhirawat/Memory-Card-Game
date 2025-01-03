import React, { useState, useEffect } from "react";
import Nami from './images/Nami.jpg';
import Dandadan from './images/Dandadan.jpg';
import Shanks from './images/Shanks.jpg';
import Kratos from './images/Kratos.jpg';
import Sukuna from './images/Sukuna.jpg';
import NicoRobin from './images/NicoRobin.jpg';
import Batman from './images/Batman.jpg';
import Zoro from './images/Zoro.jpg';
import SilentVoice from './images/SilentVoice.jpg';
import StiensGate from './images/StiensGate.jpg';

// card data
const initialCards = [
  { id: 1, name: "Nami", image: Nami },
  { id: 2, name: "Dandadan", image: Dandadan },
  { id: 3, name: "Shanks", image: Shanks },
  { id: 4, name: "Kratos", image: Kratos },
  { id: 5, name: "Sukuna", image: Sukuna },
  { id: 6, name: "Batman", image: Batman },
  { id: 7, name: "Zoro", image: Zoro },
  { id: 8, name: "Robin", image: NicoRobin },
  { id: 9, name: "Silent Voice", image: SilentVoice },
  { id: 10, name: "Steins Gate", image: StiensGate },
];

// Shuffle function
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [cards, setCards] = useState(initialCards);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Shuffle cards on initial render
  useEffect(() => {
    setCards(shuffleArray(initialCards));
  }, []);

  const handleCardClick = (id: number) => {
    if (clickedCards.includes(id)) {
      // Reset game if card is clicked twice
      alert("Game Over! You clicked this card twice.");
      setClickedCards([]);
      setScore(0);
    } else {
      // Add card to clicked list, increase score, and shuffle cards
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      if (score + 1 > bestScore) setBestScore(score + 1);
      setCards(shuffleArray(cards));
    }
    
  };

  return (
    <div className="App">
      <header>Memory Game</header>
      <p className="subheading">
        Get points by clicking on an image but don’t click on any more than once!
      </p>
      <div className="score">
        Score: {score} | Best Score: {bestScore}
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} alt={card.name} />
            <div className="card-title">{card.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;