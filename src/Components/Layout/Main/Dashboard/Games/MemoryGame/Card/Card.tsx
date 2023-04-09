import CardModel from "../../../../../../../Models/CardModel";
import "./Card.css";
import flipSound from "./card-flip.mp3";
import cardSuccess from "./card-success.mp3";
// import backImage from "./memory-card-cover-b.png";
interface CardProps {
  card: CardModel;
  onClick: () => void;
  onSuccess: () => void;
}

function Card({ card, onClick, onSuccess }: CardProps): JSX.Element {
  const cardClasses = ["card"];

  const playSuccessSound = () => {
    const audio = new Audio(cardSuccess);
    audio.play();
  };
    
  const playFlipSound = () => {
    const audio = new Audio(flipSound);
    audio.play();
  };

  if (card.isFlipped || card.isMatched) {
    cardClasses.push("flipped");
  }

  const handleClick = () => {
    console.log("Card component clicked");
    playFlipSound();
    onClick();
    if (card.isMatched) {
      playSuccessSound();
      onSuccess();
    }
  };

  return (
    <div className="Card">
      <button className={cardClasses.join(" ")} onClick={handleClick}>
        <p className="card_inner">
            {card.isFlipped || card.isMatched ? card.englishWord : ""}
        </p>
      </button>
    </div>
  );
}

export default Card;
