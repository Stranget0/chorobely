import type { CardOptions } from "./types";

function getRandomImage(
  id: string,
  width = 200,
  height = width * 1.91
): string {
  return `https://picsum.photos/seed/${id}/${width}/${height}`;
}

export const options: CardOptions[] = [
  {
    title: "OptionA",
    priceMod: "+",
    options: [
      { image: getRandomImage("monster1.1"), title: "OptionA2", value: 10 },
      { image: getRandomImage("monster1.2"), title: "OptionA2", value: 20 },
      { image: getRandomImage("monster1.3"), title: "OptionA2", value: 30 },
    ],
  },
  {
    title: "OptionB",
    priceMod: "*",
    options: [
      { image: getRandomImage("monster2.1"), title: "OptionB1", value: 1 },
      { image: getRandomImage("monster2.2"), title: "OptionB2", value: 1.1 },
      { image: getRandomImage("monster2.3"), title: "OptionB3", value: 1.2 },
    ],
  },
];
