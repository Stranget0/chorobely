import { Cards } from "../Card/Cards";
import { stage } from "../../utils/stages";

const choices: string[] = [];

function handleCard(card: HTMLElement) {
  chooseCard(card.id);
}

export function initializeStage(stageElement: HTMLElement) {
  if (stageElement) {
    Cards.getFrom(stageElement).addHandlers("click", handleCard);
  }
}

function handleNextStage(): boolean {
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

function chooseCard(id: string): boolean {
  choices.push(id);
  const hasNextStage = handleNextStage();
  return hasNextStage;
}

export function sendChoices() {
  console.log({ choices });
}
