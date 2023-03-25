import type { Card, Stage } from "../../types";

type Clean = {
  node: HTMLElement;
  event: keyof HTMLElementEventMap;
  listener: (event: keyof HTMLElementEventMap) => void;
};

type Elements = NodeListOf<HTMLElement> | null;

type CardHandler<T extends keyof HTMLElementEventMap> = (
  card: HTMLElement,
  e: HTMLElementEventMap[T]
) => void;

type Listener<T extends keyof HTMLElementEventMap> = (
  e: HTMLElementEventMap[T]
) => void;

type CardData = Pick<Card & Stage, "value" | "priceMod">;

export class Cards {
  elements: Elements = null;

  cleanArr: Clean[] = [];

  constructor(elements: Cards["elements"]) {
    this.elements = elements;
  }

  addHandlers<T extends keyof HTMLElementEventMap>(
    type: T,
    handler: CardHandler<T>
  ) {
    if (this.elements) {
      for (const card of this.elements.values()) {
        const listener: Listener<T> = (e) => handler(card, e);
        card.addEventListener(type, listener);
      }
    }
  }

  readCardPrice(id: string): CardData {
    const cards = this.elements?.values() || [];
    for (const card of cards) {
      if (id === card.id) {
        return this.getDataFromCard(card);
      }
    }

    // error handling
    const elements = this.elements || [];
    const ids = Array.from(elements?.values())
      .map(({ id }) => id)
      .join();
    throw new Error(
      `Couldn't read price from card id ${id}. Shown id's are ${ids}`
    );
  }

  getDataFromCard(card: HTMLElement): CardData {
    const { priceMod = "", value: valueStr = "" } = card.dataset;
    const value = parseFloat(valueStr) || 0;
    return { priceMod, value };
  }

  static getFrom(
    cardContainer: Pick<HTMLElement, "querySelectorAll"> = document
  ) {
    const cardNodes = cardContainer.querySelectorAll<HTMLDivElement>(".card");
    return new Cards(cardNodes);
  }
}
