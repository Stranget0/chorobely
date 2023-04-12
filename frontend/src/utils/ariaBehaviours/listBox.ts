import appAddEventListener from "../addEventListener";
import {
  Plane,
  matchDirection,
  planeDirectionToOffset,
} from "../codeDirections";

interface Options {
  focusInitialMobile: boolean;
}

export function addListBoxBehaviour(
  listBox: HTMLElement,
  plane: Plane,
  options?: Options
) {
  const listBoxOptions = Array.from(
    listBox.querySelectorAll<HTMLButtonElement>("button[role=option]")
  );

  function listener(e: KeyboardEvent): void {
    const indexOfFocused = document.activeElement
      ? listBoxOptions.indexOf(document.activeElement as HTMLButtonElement)
      : -1;

    const direction = matchDirection(e);
    const offset = direction && planeDirectionToOffset(plane, direction);
    if (indexOfFocused !== -1 && offset) {
      const index = loopingIndex(indexOfFocused - 1, listBoxOptions.length);
      listBoxOptions[index]!.focus();
    }
  }
	document.addEventListener("keydown", e=>{})
  const cleanKeyListener = appAddEventListener(document, "keydown", listener);

  return {
    cleanListBoxListeners: () =>
      document.removeEventListener("keydown", listener),
  };
}
const loopingIndex = (index: number, length: number): number =>
  index >= 0 ? index : length - 1;
