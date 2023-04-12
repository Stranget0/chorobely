import type { Card, Stage } from "../../types";
import { getCalculatedPrice } from "../../utils/price";
import stringify from "../../utils/stringify";

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

  constructor(elements: Cards["elements"]) {
    this.elements = elements;
  }

  addHandlers<T extends keyof HTMLElementEventMap>(
    type: T,
    handler: CardHandler<T>
  ) {
    const cleanArr: VoidFunction[] = [];
    if (this.elements) {
      for (const card of this.elements.values()) {
        const listener: Listener<T> = (e) => handler(card, e);
        card.addEventListener(type, listener);
        cleanArr.push(() => card.removeEventListener(type, listener));
      }
    }
    return { cleanCards: () => cleanArr.forEach((clean) => clean()) };
  }

  updatePrices(fromPrice: number) {
    this.elements?.forEach((c) => {
      const { priceMod, value } = Cards.getDataFromCard(c);
      const priceNode = c.querySelector(".price");
      if (priceNode) {
        const newPrice = getCalculatedPrice(fromPrice, priceMod, value);
        const difference = newPrice - fromPrice;
        priceNode.textContent = `${
          !difference ? "" : difference > 0 ? "+" : "-"
        } ${!difference ? "-" : Math.abs(difference)}`;
      }
    });
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
