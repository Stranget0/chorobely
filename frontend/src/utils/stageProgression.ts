import { Cards } from "./Cards";
import { stage } from "./stages";

const choices: string[] = [];

export function initializeStage(stageElement: HTMLElement) {
  if (stageElement) {
    Cards.getFrom(stageElement).addHandlers("click", (card) =>
      chooseCard(card.id)
    );
  }
}

function handleNextStage(): boolean {
  const oldStage = stage.current;
  if (oldStage) {
    const currentStage = stage.toNext();
    if (currentStage) {
      const cards = Cards.getFrom(currentStage);
      cards.addHandlers("click", (card) => {
        chooseCard(card.id);
      });
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
