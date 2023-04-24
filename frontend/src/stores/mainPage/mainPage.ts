import { createStore } from "zustand/vanilla";
import {
  subscribeWithSelector,
  persist,
  createJSONStorage,
} from "zustand/middleware";
import { CustomizationSlice, customizationSlice } from "./slices/customization";

export type MainPageState = CustomizationSlice;

const mainPageStore = createStore(
  persist(
    // Enables selector optimizations for vanilla javascript subscribe
    subscribeWithSelector<MainPageState>((...a) => ({
      ...customizationSlice(...a),
    })),
    {
      name: "main-page-storage",
      partialize: ({ choices, price }) => ({ choices, price }),
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => console.log,
    }
  )
);

export default mainPageStore;
