import type { StateCreator } from "zustand";

export interface CustomizationSlice {
  choices: HTMLElement[];
  stages: HTMLDivElement[];
  initialize(stages: HTMLDivElement[]): void;
  selectCard(card: HTMLElement): void;
  revert(steps?: number): void;
}

export const customizationSlice: StateCreator<CustomizationSlice> = (
  set,
  get
) => ({
  choices: [],
  stages: [],
  initialize: (stages) => set({ stages }),
 
  selectCard: (card) => set({ choices: [...get().choices, card] }),
  revert: (steps = 1) => {
    const choices = get().choices.slice(0, -steps);
    return set({ choices });
  },
});