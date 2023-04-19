import {
  Plane,
  matchDirection,
  planeDirectionToOffset,
} from "../codeDirections";

interface Options {
  focusOnInactive?: boolean;
}

export function addListBoxBehaviour(
  listBox: HTMLElement,
  plane: Plane,
  { focusOnInactive }: Options = {}
) {
  const listBoxOptions = Array.from(
    listBox.querySelectorAll<HTMLButtonElement>("button[role=option]")
  );
  listBoxOptions[0]?.focus();
  function listener(e: KeyboardEvent): void {
		const activeElement = document.activeElement;

		const indexOfFocused = activeElement
      ? listBoxOptions.indexOf(activeElement as HTMLButtonElement)
      : -1;

    if (indexOfFocused === -1) {
			const isNoFocus = !activeElement || activeElement === document.body;
			if(focusOnInactive && isNoFocus) listBoxOptions[0]?.focus()
      return;
    }

    const direction = matchDirection(e);
    const offset = direction && planeDirectionToOffset(plane, direction);
    if (offset) {
			const index = getIndex(indexOfFocused + offset, listBoxOptions.length);
      listBoxOptions[index]!.focus();
    }
  }

  document.addEventListener("keydown", listener);

  return {
    cleanListBoxListeners: () =>
      document.removeEventListener("keydown", listener),
  };
}

const getIndex = (index: number, length: number): number =>
  index >= 0 ? index % length : length - 1;
