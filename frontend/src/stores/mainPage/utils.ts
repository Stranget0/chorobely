import { Cards } from "../../components/Card/Cards";
import { getCalculatedPrice } from "../../utils/price";
import type { MainPageState } from "./mainPage";

export function getStageFromState({
  stages,
  choices,
}: Pick<MainPageState, "stages" | "choices">) {
  return stages[choices.length];
}

export function getPriceFromState({
  choices,
}: Pick<MainPageState, "choices">): number {
  return choices.reduce((price, choice) => {
    const { priceMod, value } = Cards.getDataFromCard(choice);
    return getCalculatedPrice(price, priceMod, value);
  }, 0);
}
