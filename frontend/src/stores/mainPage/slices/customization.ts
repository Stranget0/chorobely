import type { StateCreator } from "zustand";

export interface CustomizationSlice {
  choices: HTMLElement[];
  selectCard: (card: HTMLElement) => void;
  revert: (card?: HTMLElement) => void;
}

export const customizationSlice: StateCreator<CustomizationSlice> = (set, get) => ({
  choices: [],
  selectCard: (card) => set({ choices: [...get().choices, card] }),
  revert: (card) => {
    const { choices } = get();
    const cardIndex = card ? choices.indexOf(card) : choices.length - 2;
    if (cardIndex > -1) {
      const newChoices = choices.slice(0, -cardIndex);
      set({ choices: newChoices });
    } else
      throw new Error(
        `Invalid card index ${cardIndex}` + card
          ? `Card ${card!.id} not found`
          : ""
      );
  },
});
