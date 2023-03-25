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

  static getFrom(stageElement: HTMLElement) {
    const cardNodes = stageElement.querySelectorAll<HTMLDivElement>(".card");
    return new Cards(cardNodes);
  }
}
