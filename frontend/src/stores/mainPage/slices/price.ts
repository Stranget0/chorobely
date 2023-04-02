import type { StateCreator } from "zustand";
import { getCalculatedPrice } from "../../../utils/price";

export interface PriceSlice {
  price: number;
  modifyPrice: (priceMod: string, value: number) => void;
}

export const priceSlice: StateCreator<PriceSlice> = (set, get) => ({
  price: 0,
  modifyPrice: (priceMod: string, value: number) => {
    const { price: oldPrice } = get();
    const price = getCalculatedPrice(oldPrice, priceMod, value);
    set({ price });
  },
});
