export type Direction = "up" | "right" | "down" | "left";
export type Plane = "vertical" | "horizontal";

const directionCodes: { [k in Direction]: string[] } = {
  up: ["w", "ArrowUp"],
  right: ["d", "ArrowRight"],
  down: ["s", "ArrowDown"],
  left: ["a", "ArrowLeft"],
};

const offsets: { [k1 in Plane]: Partial<{ [k2 in Direction]: number }> } = {
  horizontal: { left: -1, right: 1 },
  vertical: { down: -1, up: 1 },
};

export function matchDirection(
  e: KeyboardEvent
): keyof typeof directionCodes | null {
  const keyToMatch = e.key;
  for (const d of Object.keys(directionCodes)) {
    if (directionCodes[d as keyof typeof directionCodes].includes(keyToMatch)) {
      return d as keyof typeof directionCodes;
    }
  }
  return null;
}

export function planeDirectionToOffset(plane: Plane, direction: Direction) {
  return offsets[plane][direction];
}
