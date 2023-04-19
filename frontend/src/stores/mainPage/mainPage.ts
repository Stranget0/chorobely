import { createStore } from "zustand/vanilla";
import { subscribeWithSelector } from "zustand/middleware";
import { CustomizationSlice, customizationSlice } from "./slices/customization";

export type MainPageState = CustomizationSlice;

const mainPageStore = createStore(
  // Enables selector optimizations for vanilla javascript subscribe
  subscribeWithSelector<MainPageState>((...a) => ({
    ...customizationSlice(...a),
  }))
);

export default mainPageStore;
