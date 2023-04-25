export type Card = {
  id: string;
  title: string;
  value: number;
  image: string;
  textColor?: string;
};
export type Stage = {
  id: string;
  title: string;
  bgColor?: string;
  priceMod: string;
  options: Card[];
};
