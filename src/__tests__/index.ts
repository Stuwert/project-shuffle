import DeckManager from "../DeckManager";

describe("should work", () => {
  test("The length of the deck should be the length of both arrays multiplied together", () => {
    const suits = ["A", "B"];
    const values = ["1", "2"];
    const deckManager = new DeckManager(values, suits);

    const deck = deckManager.getDeck();

    expect(deck.length).toBe(suits.length * values.length);
  });
  test("The first card in the deck at initialization should be the join of the 0th indices of the arrays", () => {
    const suits = ["B", "A"];
    const values = ["1", "2"];
    const deckManager = new DeckManager(values, suits);

    const deck = deckManager.getDeck();

    expect(deck[0]).toBe("B1");
  });
});
