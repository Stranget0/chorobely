export function getCalculatedPrice(
  currentPrice: number,
  priceMod: string,
  value: number
): number {
  let price = currentPrice;
  switch (priceMod) {
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
    default: {
      throw new Error(`Invalid priceMod: ${priceMod}`);
    }
  }
  return price;
}
