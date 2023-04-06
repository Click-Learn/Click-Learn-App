
import CardModel from "../../../../../../../Models/CardModel";
import "./Card.css";
import flipSound from "./card-flip.mp3";


interface CardProps {
  card: CardModel;
  onClick: () => void;
}

function Card({ card, onClick }: CardProps): JSX.Element {
  const cardClasses = ["card"];

  if (card.isFlipped || card.isMatched) {
    cardClasses.push("flipped");
  }

  const playFlipSound = () => {
    const audio = new Audio(flipSound);
    audio.play();
  };

  
  const handleClick = () => {
    console.log("Card component clicked");
    playFlipSound();
    onClick();
  };

  return (
    <div className="Card">
      <button className={cardClasses.join(" ")} onClick={handleClick}>
        {card.isFlipped || card.isMatched ? card.englishWord : ""}
      </button>
    </div>
  );
}

export default Card;


