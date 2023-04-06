import { useState } from "react";
import CardModel from "../../../../../../Models/CardModel";
import GameModel from "../../../../../../Models/GameModel";
import "./MemoryGame.css";
import Card from "./Card/Card";

// Sample card data
const cardData = [
    { englishWord: 'hello', hebrewWord: 'שלום' },
    { englishWord: 'goodbye', hebrewWord: 'להתראות' },
    { englishWord: 'please', hebrewWord: 'בבקשה' },
    { englishWord: 'thank you', hebrewWord: 'תודה' },
    { englishWord: 'sun', hebrewWord: 'שמש' },
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

    const handleCardClick = (index: number) => {
        console.log('Card clicked:', index);
        game.selectCard(index);
        console.log('Updated cards state:', game.cards);
        setCardsState([...game.cards]);
    };


    return (
        <div className="MemoryGame">
            <div className="game-board">
                {cardsState.map((card, index) => (
                    <Card key={index} card={card} onClick={() => handleCardClick(index)} />
                ))}
            </div>
        </div>
    );
}

// return (
//     <div className="MemoryGame">
//       <div className="game-board">
//         {cardsState.map((card, index) => (
//           <div
//             key={index}
//             onClick={() => {
//               console.log("Test click", index);
//             }}
//           >
//             <Card card={card} onClick={() => handleCardClick(index)} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default MemoryGame;
