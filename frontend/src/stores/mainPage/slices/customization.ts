import type { StateCreator } from "zustand";
import { getPriceFromState } from "../utils";
import type { Card, Stage } from "../../../types";
import { Cards } from "../../../components/Card/Cards";

type CardData = Pick<Stage, 'priceMod'> & Pick<Card, 'value'>

export interface Choice extends CardData{
	backgroundImage?: string;
}

export interface CustomizationSlice {
  price: number;
  choices: Choice[];
  stages: HTMLElement[];
  initialize(stages: HTMLElement[]): void;
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
		const data = Cards.getDataFromCard(card);
    const choices = [...get().choices, data];
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
