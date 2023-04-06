export default class CardModel {
    englishWord: string;
    hebrewWord: string;
    isFlipped: boolean;
    isMatched: boolean;
  
    constructor(englishWord: string, hebrewWord: string) {
      this.englishWord = englishWord;
      this.hebrewWord = hebrewWord;
      this.isFlipped = false;
      this.isMatched = false;
    }
  }
  