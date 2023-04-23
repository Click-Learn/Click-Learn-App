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
import { WordModel } from "../../../../../../Models/WordModel";

function MemoryGame(): JSX.Element {
  const isLogin = useSelector((state : any) => state.authSlice)
  const navigate = useNavigate()
  useEffect(() => {
      if(!isLogin){
          navigate("/")
          toastsFunctions.toastError("אנא התחבר בכדי להמשיך...")
      }
  })


  async function getCards(): Promise<CardModel[]> {
  const words: WordModel[] = await servicesFunctions.getAllWordByUser();
    
  // Filter the words based on whether they are favorites or not
  const favoriteWords = words.filter(({ favorite }) => favorite == true);
  const unfavoriteWords = words.filter(({ favorite }) => favorite == false);
  


  // If the user doesn't have at least 6 words, navigate to "/"
  if (words.length < 6) {
    navigate("/dashboard");
    toastsFunctions.toastError("חייבים לשמור לפחות 6 מילים על מנת לשחק במשחק הזיכרון")   
    return [];
  }

  // Take the first 6 favorite words randomly
  let selectedWords = favoriteWords
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  // If there are not enough favorite words, complete with unfavorite words
  if (selectedWords.length < 6) {
    const remainingWords = 6 - selectedWords.length;
    const remainingUnfavoriteWords = unfavoriteWords
    .filter(({ englishWord }) => !selectedWords.some((word) => word.englishWord === englishWord && word.favorite))
    .sort(() => Math.random() - 0.5)
    .slice(0, remainingWords);
  
    selectedWords = selectedWords.concat(remainingUnfavoriteWords);
  }

  

  // Create the card models
  const cards: CardModel[] = selectedWords
    .flatMap(({ englishWord, hebrewWord }) => [
      new CardModel(englishWord, hebrewWord),
      new CardModel(hebrewWord, englishWord),
    ])
    .slice(0, 12);
    
    
  return cards;
}

  

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
    setTotalMoves(game?.totalMoves || 0);
    setCardsState([...(game?.cards || [])]);
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
