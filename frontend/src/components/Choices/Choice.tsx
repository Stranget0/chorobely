import mainPageStore from "../../stores/mainPage/mainPage";
import classNames from "classnames";
import type { Choice } from "../../stores/mainPage/slices/customization";
import classes from "./Choices.module.scss";

interface Props {
  choiceData: Choice | undefined;
  index: number;
}

const Choice = ({ choiceData, index }: Props) => {
  const handleClick = () => {
    const { choices, revert } = mainPageStore.getState();
    const revertSteps = choices.length - index;
    revert(revertSteps);
  };
  // const backgroundImage = children?.style?.backgroundImage;

  return (
    <button
      onClick={handleClick}
      style={{ "background-image": choiceData?.backgroundImage }}
      tabIndex={choiceData ? 0 : -1}
      aria-hidden={!choiceData}
      aria-label={choiceData?.title || ""}
      class={classNames(
        "radius rounded-full aspect-square w-16 animate-appear-300 bg-white bg-cover bg-center",
        choiceData &&
          "after:rounded-xl after:p-2 after:whitespace-nowrap after:bg-stone-700 after:text-white",
        !choiceData?.backgroundImage && "pointer-events-none",
        choiceData && classes.choice
      )}
    />
  );
};

export default Choice;
