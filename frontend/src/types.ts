export type PriceMod = "+" | "-" | "/" | "*";
export type OptionPart = { title: string; value: number; image: string };
export type CardOptions = {
  title: string;
  bgColor?: string;
  priceMod: PriceMod;
  textColor?: string;
  options: OptionPart[]
};
