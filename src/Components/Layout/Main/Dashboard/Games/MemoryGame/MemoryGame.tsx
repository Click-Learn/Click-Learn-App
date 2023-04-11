import { useEffect, useState } from "react";
import CardModel from "../../../../../../Models/CardModel";
import GameModel from "../../../../../../Models/GameModel";
import "./MemoryGame.css";
import Card from "./Card/Card";
import gameoverSound from "./game-success.mp3";
import Confetti from 'react-confetti'
import resetSount from './game-reset.mp3'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";

getCards().then((cards) => {
  const game = new GameModel(cards);
});

async function getCards(): Promise<CardModel[]> {
  const words = await servicesFunctions.getAllWordByUser();
  const cards: CardModel[] = words.flatMap(({ englishWord, hebrewWord }) => [
    new CardModel(englishWord, hebrewWord),
    new CardModel(hebrewWord, englishWord),
  ]);
  
  return cards.slice(0, 12);
}

function MemoryGame(): JSX.Element {
  const isLogin = useSelector((state : any) => state.authSlice)
  const navigate = useNavigate()
  useEffect(() => {
      if(!isLogin){
          navigate("/")
          toastsFunctions.toastError("Must be Login to continue...")
      }
  })

  const [cardsState, setCardsState] = useState<CardModel[]>([]);
const [isGameOver, setIsGameOver] = useState<boolean>(false);
const [totalMoves, setTotalMoves] = useState<number>(0);
const [game, setGame] = useState<GameModel>();

const resetGame = () => {
  game?.reset();
  setCardsState([...(game?.cards || [])]);
  setIsGameOver(false);
  setTotalMoves(0);
  playResetSound();
};

const playResetSound = () => {
  const audio = new Audio(resetSount);
  audio.play();
};

const handleCardClick = (index: number) => {
  game?.selectCard(index, () => {
    setCardsState([...(game?.cards || [])]);
    setTotalMoves(game?.totalMoves || 0);
  });

  setCardsState([...(game?.cards || [])]);

  if (game?.isGameOver) {
    setIsGameOver(true);
    const audio = new Audio(gameoverSound);
    audio.play();
  }
};

useEffect(() => {
  getCards().then((cards) => {
    const game = new GameModel(cards);
    setGame(game);
    setCardsState([...game.cards]);
  });
}, []);

return (
  <div className="MemoryGame">
    <div className="game-board">
      {cardsState.map((card, index) => (
        <Card key={index} card={card} onSuccess={() => handleCardClick(index)} onClick={() => handleCardClick(index)} />
      ))}
      <div className="total-moves">מספר מהלכים: {totalMoves}</div>
    </div>
    <button className="reset-button" onClick={resetGame}>
      איפוס
    </button>
    {isGameOver && (
      <div className="game-over">
        <Confetti width={1000} height={600} />
      </div>
    )}
  </div>
);
    
    }

export default MemoryGame;
