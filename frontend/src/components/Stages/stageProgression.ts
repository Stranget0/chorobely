import { CardHandler, Cards } from "../Card/Cards";
import { stage } from "../../utils/stages";

const choices: string[] = [];

export function initializeStage(
  stageElement: HTMLElement,
  handleCard: CardHandler
) {
  if (stageElement) {
    Cards.getFrom(stageElement).addHandlers("click", handleCard);
  }
}

export function handleNextStage(handleCard: CardHandler): boolean {
  const oldStage = stage.current;
  if (oldStage) {
    const currentStage = stage.toNext();
    if (currentStage) {
      const cards = Cards.getFrom(currentStage);
      cards.addHandlers("click", handleCard);
      return true;
    }
  }
  return false;
}

export function makeChoice(cardId: string) {
  choices.push(cardId);
}

export function sendChoices() {
  console.log({ choices });
}
