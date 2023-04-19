import type { StateCreator } from "zustand";
import { getPriceFromState } from "../utils";

export interface CustomizationSlice {
  price: number;
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
  price: 0,
  choices: [],
  stages: [],
  initialize: (stages) => set({ stages }),

  selectCard: (card) => {
    const choices = [...get().choices, card];
    const price = getPriceFromState({ choices });
    set({ choices, price });
  },
  revert: (steps = 1) => {
    set(({ choices: ch }) => {
      const choices = ch.slice(0, ch.length - steps);
      const price = getPriceFromState({ choices });
			return {
        choices,
        price,
      };
    });
  },
});
