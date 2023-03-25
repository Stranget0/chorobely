import type { Stage } from "./types";

function getRandomImage(
  id: string,
  width = 200,
  height = (width * 3) / 2
): string {
  return `https://picsum.photos/seed/${id}/${width}/${height}`;
}

export const stages: Stage[] = [
  {
    id: "stage-1",
    title:
      "Option A lorem dolor in mod lorem dolor in mod lorem dolor in mod lorem dolor in mod ",
    priceMod: "+",
    options: [
      {
        id: "card-1",
        image: getRandomImage("monster1.1"),
        title: "Option A2",
        value: 10,
      },
      {
        id: "card-2",
        image: getRandomImage("monster1.2"),
        title: "Option A2",
        value: 20,
      },
      {
        id: "card-3",
        image: getRandomImage("monster1.3"),
        title: "Option A2",
        value: 30,
      },
      {
        id: "card-4",
        image: getRandomImage("monster1.1"),
        title: "Option A2",
        value: 10,
      },
    ],
  },
  // {
  //   title: "Option B lorem dolor in mod lorem dolor in mod lorem dolor in mod lorem dolor in mod ",
  //   priceMod: "*",
  //   options: [
  //     { image: getRandomImage("monster2.1"), title: "Option B1", value: 1 },
  //   ],
  // },
  // {
  //   title: "Option B lorem dolor in mod lorem dolor in mod lorem dolor in mod lorem dolor in mod ",
  //   priceMod: "*",
  //   options: [
  //     { image: getRandomImage("monster2.1"), title: "Option B1", value: 1 },
  //     { image: getRandomImage("monster2.2"), title: "Option B2", value: 1.1 },
  //     { image: getRandomImage("monster2.3"), title: "Option B3", value: 1.2 },
  //   ],
  // },
];
