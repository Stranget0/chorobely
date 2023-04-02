import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PriceSlice, priceSlice } from "./slices/price";
import { CustomizationSlice, customizationSlice } from "./slices/customization";

type State = PriceSlice & CustomizationSlice;

const useMainPageStore = create(
  // Enables selector optimizations for vanilla javascript subscribe
  subscribeWithSelector<State>((...a) => ({
    // Slices
    ...priceSlice(...a),
    ...customizationSlice(...a),
  }))
);

export default useMainPageStore;
