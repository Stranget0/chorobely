import { priceAmountId } from "./constants";
import type { PriceMod } from "./types";

const priceAmountElement = document.getElementById(priceAmountId)!;

export function getPriceAmount(): number {
  return parseFloat(priceAmountElement.textContent!);
}

export function setPriceAmount(amount: number): void {
  priceAmountElement.textContent = amount + "";
}

export function modifyPrice(mod: PriceMod, value: number) {
  const [price, difference] = calculatePrice(mod, value);
  setPriceAmount(price);
	return difference;
}

function calculatePrice(mod: string, value: number): [number, number] {
	const currentPrice = getPriceAmount();
	let price = currentPrice;
	switch (mod) {
		case "*": {
			price *= value;
			break;
		}
		case "+": {
			price += value;
			break;
		}
		case "-": {
			price -= value;
			break;
		}
		case "/": {
			price /= value;
			break;
		}
	}
	return [price, currentPrice - price];
}

