export const stages = document.querySelectorAll<HTMLElement>(".stage");

export const stage = {
  index: 0,
  current: stages[0],

  toNext(): HTMLElement | undefined {
    this.hide();
    this.index++;
    this.current = stages[this.index];
    this.show();
    return this.current;
  },

  hide() {
    this.current?.classList.add("hidden");
  },

  show() {
    this.current?.classList.remove("hidden");
  },
};
