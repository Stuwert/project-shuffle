export default class DeckManager {
  private deck: string[];

  constructor(values: string[], suits: string[]) {
    this.deck = [];

    suits.forEach((suit) => {
      values.forEach((value) => {
        this.deck.push(suit + value);
      });
    });
  }

  getDeck() {
    return this.deck;
  }
}
