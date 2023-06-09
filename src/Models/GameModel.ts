import CardModel from './CardModel';

export default class GameModel {
  cards: CardModel[];
  firstCardSelected: CardModel | null;
  secondCardSelected: CardModel | null;
  totalMoves: number;
  totalMatches: number;
  isGameOver: boolean;

  constructor(cards: CardModel[]) {
    this.cards = cards.sort(() => Math.random() - 0.5);
    this.firstCardSelected = null;
    this.secondCardSelected = null;
    this.totalMoves = 0;
    this.totalMatches = 0;
    this.isGameOver = false;
  }

  reset() {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
    this.firstCardSelected = null;
    this.secondCardSelected = null;
    this.totalMoves = 0;
    this.totalMatches = 0;
    this.isGameOver = false;
    this.cards.forEach(card => {
      card.isFlipped = false;
      card.isMatched = false;
    });
  }
  

selectCard(index: number, callback?: () => void) {
    const selectedCard = this.cards[index];
  
    if (
      selectedCard.isFlipped ||
      selectedCard.isMatched ||
      (this.firstCardSelected && this.secondCardSelected)
    ) {
      return;
    }
  
    selectedCard.isFlipped = true;
  
    if (!this.firstCardSelected) {
      this.firstCardSelected = selectedCard;
    } else {
      this.secondCardSelected = selectedCard;
      this.totalMoves++;
      
      if (
        this.firstCardSelected.englishWord === this.secondCardSelected.hebrewWord ||
        this.firstCardSelected.hebrewWord === this.secondCardSelected.englishWord
        ) {
          this.firstCardSelected.isMatched = true;
          this.secondCardSelected.isMatched = true;
        this.totalMatches++;
        
        if (this.totalMatches === this.cards.length / 2) {
          this.isGameOver = true;
        }
        this.firstCardSelected = null;
        this.secondCardSelected = null;
        if (callback) {
          callback();
        }
      } else {
        setTimeout(() => {
          this.firstCardSelected!.isFlipped = false;
          this.secondCardSelected!.isFlipped = false;
          this.firstCardSelected = null;
          this.secondCardSelected = null;
  
          if (callback) {
            callback();
          }
        }, 1000);
      }
    }
  }
  

}

