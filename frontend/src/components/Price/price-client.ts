import { priceAmountId } from "./constants";

const priceAmountElement = document.getElementById(priceAmountId)!;

export function getPriceAmount(): number {
  return parseFloat(priceAmountElement.textContent!);
}

export function setPriceAmount(amount: number): void {
  priceAmountElement.textContent = amount + "";
}

export function getCalculatedPrice(mod: string, value: number): number {
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
  return price;
}

