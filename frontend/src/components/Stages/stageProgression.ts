import { CardHandler, Cards } from "../Card/Cards";
import { stage } from "../../utils/stages";

const choices: string[] = [];

export function initializeStage(
  stageElement: HTMLElement,
  handleCard: CardHandler
) {
  if (stageElement) {
    const cards = Cards.getFrom(stageElement);
    cards.addHandlers("click", handleCard);
		cards.updateCardPrices()
	}
}

export function handleNextStage(handleCard: CardHandler): Cards | null {
  const oldStage = stage.current;
  if (oldStage) {
    const currentStage = stage.toNext();
    if (currentStage) {
      const cards = Cards.getFrom(currentStage);
      cards.addHandlers("click", handleCard);
      return cards;
    }
  }
  return null;
}

export function makeChoice(cardId: string) {
  choices.push(cardId);
}

export function sendChoices() {
  console.log({ choices });
}
