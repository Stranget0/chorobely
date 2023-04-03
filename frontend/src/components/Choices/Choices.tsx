import { For } from "solid-js";
import mainPageStore from "../../stores/mainPage/mainPage";
import Choice from "./Choice";
import { solidStore } from "../../utils/zustand-solid";

export default function Choices() {
const choices = solidStore(mainPageStore, ({choices})=>choices)

	return (
    <div class="w-full min-h-[4rem] flex flex-wrap m-2 gap-4 z-10">
			<For each={choices()}>
				{(choice, i) => <Choice index={i()}>{choice}</Choice>}
			</For>
		</div>
  );
}
