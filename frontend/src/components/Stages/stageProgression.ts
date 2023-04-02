import { CardHandler, Cards } from "../Card/Cards";
import { stage } from "../../utils/stages";

const choices: string[] = [];
let cleanCardListeners: VoidFunction | null = null;

export function initializeStage(
  stageElement: HTMLElement,
  handleCard: CardHandler
) {
  if (stageElement) {
    const cards = Cards.getFrom(stageElement);
    cleanCardListeners = cards.addHandlers("click", handleCard);
  }
}

export function handleNextStage(handleCard: CardHandler) {
  const oldStage = stage.current;
  if (oldStage) {
    cleanCardListeners!();
    const currentStage = stage.toNext();
    if (currentStage) {
      const cards = Cards.getFrom(currentStage);
      cleanCardListeners = cards.addHandlers("click", handleCard);
    }
    // Clear memory
  } else cleanCardListeners = null;
}

export function makeChoice(cardId: string) {
  choices.push(cardId);
}

export function sendChoices() {
  console.log({ choices });
}
