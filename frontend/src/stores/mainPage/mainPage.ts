import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PriceSlice, priceSlice } from "./slices/price";
import { CustomizationSlice, customizationSlice } from "./slices/customization";
import { getStageFromState } from "./utils";
import { mountStoreDevtool } from "simple-zustand-devtools";

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

// #region Subscriptions
export function subscribeToCurrentStage(
  handler: (
    stage: HTMLDivElement | undefined,
    previousStage: HTMLDivElement | undefined
  ) => void
) {
  return useMainPageStore.subscribe(
    (state) => getStageFromState(state),
    handler
  );
}
// #endregion

if (import.meta.env.MODE === "development") {
  mountStoreDevtool("Main Page", useMainPageStore);
}
