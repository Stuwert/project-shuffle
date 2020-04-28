interface DeckManagerInterface<T> {
  getDeck: () => T[];
  makeDeck: (itemValues: T[], suits: T[]) => T[];
}

export default class DeckManager implements DeckManagerInterface<string> {
  private deck: string[];

  constructor(itemValues: string[], suits: string[]) {
    this.deck = this.makeDeck(itemValues, suits);
  }

  makeDeck(itemValues: string[], suits: string[]) {
    const newDeck: string[] = [];
    suits.forEach((suit: string) => {
      itemValues.forEach((itemValue: string) => {
        this.deck.push(suit + itemValue);
      });
    });
    return newDeck;
  }

  getDeck() {
    return this.deck;
  }
}
