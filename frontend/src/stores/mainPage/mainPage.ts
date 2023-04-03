import { createStore } from "zustand/vanilla";
import { subscribeWithSelector } from "zustand/middleware";
import { PriceSlice, priceSlice } from "./slices/price";
import { CustomizationSlice, customizationSlice } from "./slices/customization";
import { getStageFromState } from "./utils";
import { mountStoreDevtool } from "simple-zustand-devtools";

type State = PriceSlice & CustomizationSlice;

const mainPageStore = createStore(
  // Enables selector optimizations for vanilla javascript subscribe
  subscribeWithSelector<State>((...a) => ({
    // Slices
    ...priceSlice(...a),
    ...customizationSlice(...a),
  }))
);

export default mainPageStore;

// #region Subscriptions
export function subscribeToCurrentStage(
  handler: (
    stage: HTMLDivElement | undefined,
    previousStage: HTMLDivElement | undefined
  ) => void
) {
  return mainPageStore.subscribe(
    (state) => getStageFromState(state),
    handler
  );
}
// #endregion

if (import.meta.env.MODE === "development") {
  mountStoreDevtool("Main Page", mainPageStore);
}
