import { useState } from "react";
import CardModel from "../../../../../../Models/CardModel";
import GameModel from "../../../../../../Models/GameModel";
import "./MemoryGame.css";
import Card from "./Card/Card";
import gameoverSound from "./game-success.mp3";
import Confetti from 'react-confetti'

// Sample card data
const cardData = [
    { englishWord: 'hello', hebrewWord: 'שלום' },
    { englishWord: 'goodbye', hebrewWord: 'להתראות' },
    { englishWord: 'please', hebrewWord: 'בבקשה' },
    { englishWord: 'thank you', hebrewWord: 'תודה' },
    { englishWord: 'sun', hebrewWord: 'שמש' },
    { englishWord: 'Hat', hebrewWord: 'כובע' },
    // Add more card data as needed
];

// Create card instances
const cards = cardData.flatMap(({ englishWord, hebrewWord }) => [
    new CardModel(englishWord, hebrewWord),
    new CardModel(hebrewWord, englishWord),
]);

// Initialize the memory game with card instances
const game = new GameModel(cards);


function MemoryGame(): JSX.Element {

    const [cardsState, setCardsState] = useState(game.cards);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const handleCardClick = (index: number) => {
        console.log('Card clicked:', index);
        game.selectCard(index);
        console.log('Updated cards state:', game.cards);
        setCardsState([...game.cards]);

        if (game.isGameOver) {
            setIsGameOver(true);
            const audio = new Audio(gameoverSound);
            audio.play();
          }
    };

    return (
        <div className="MemoryGame">
          <div className="game-board">
            {cardsState.map((card, index) => (
              <Card key={index} card={card} onSuccess={() => handleCardClick(index)} onClick={() => handleCardClick(index)} />
            ))}
          </div>
          {isGameOver && (
            <div className="game-over">
              <Confetti
                width={1000}
                height={cardData.length * 200}
                />
            </div>
          )}
        </div>
      );
    }
    


export default MemoryGame;
