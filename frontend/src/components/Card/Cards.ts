import type { Card, Stage } from "../../types";
import stringify from "../../utils/stringify";
import { getCalculatedPrice } from "../Price/price-client";

// TODO: implement cleaning of listeners?
// type Clean = {
//   node: HTMLElement;
//   event: keyof HTMLElementEventMap;
//   listener: (event: keyof HTMLElementEventMap) => void;
// };

type Elements = NodeListOf<HTMLElement> | null;

export type CardHandler<
  T extends keyof HTMLElementEventMap = keyof HTMLElementEventMap
> = (card: HTMLElement, e: HTMLElementEventMap[T]) => void;

type Listener<T extends keyof HTMLElementEventMap> = (
  e: HTMLElementEventMap[T]
) => void;

type CardData = Pick<Card & Stage, "value" | "priceMod">;

export class Cards {
  elements: Elements = null;

  // cleanArr: Clean[] = [];

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

  updateCardPrices() {
    if (this?.elements) {
      for (const card of this.elements) {
        const priceElement = card.querySelector(".price");
        if (priceElement) {
          const { priceMod, value } = Cards.getDataFromCard(card);
          priceElement.textContent = getCalculatedPrice(priceMod, value) + "";
        }
      }
    }
  }

  static getDataFromCard(card: HTMLElement): CardData {
    const { priceMod, value: valueStr } = card.dataset;
    const value = parseFloat(valueStr || "");
    if (priceMod === undefined || Number.isNaN(value)) {
      throw new Error(
        `Couldn't read data from card ${card.id}: ${stringify({
          priceMod,
          value: valueStr,
        })}`
      );
    }
    return { priceMod, value };
  }

  static getFrom(
    cardContainer: Pick<HTMLElement, "querySelectorAll"> = document
  ) {
    const cardNodes = cardContainer.querySelectorAll<HTMLDivElement>(".card");
    return new Cards(cardNodes);
  }
}
