export type PriceMod = "+" | "-" | "/" | "*";
export type Card = { id: string; title: string; value: number; image: string };
export type Stage = {
  id: string;
  title: string;
  bgColor?: string;
  priceMod: PriceMod;
  textColor?: string;
  options: Card[];
};
