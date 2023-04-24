import { For } from "solid-js";
import mainPageStore from "../../stores/mainPage/mainPage";
import Choice from "./Choice";
import { solidStore } from "../../utils/zustand-solid";

export default function Choices() {
  const selected = solidStore(mainPageStore, ({ choices }) => choices);
  const stagesLength = solidStore(mainPageStore, ({ stages }) => stages.length);
  const choices = () =>
    stagesLength() > 0
      ? new Array(stagesLength() - 1)
          .fill(undefined)
          .map((_, i) => selected()[i])
      : [];

  return (
    <div class='w-full min-h-[4rem] flex justify-center flex-wrap gap-4 z-10'>
      <For each={choices()}>
        {(_, i) => <Choice index={i()}>{choices()[i()]}</Choice>}
      </For>
    </div>
  );
}
