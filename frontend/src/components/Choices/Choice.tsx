import mainPageStore from "../../stores/mainPage/mainPage";
import classNames from "classnames";
import type { Choice } from "../../stores/mainPage/slices/customization";

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
      class={classNames(
        "radius rounded-full aspect-square w-16 animate-appear-300 bg-stone-100 bg-cover bg-center",
        !choiceData?.backgroundImage && "pointer-events-none"
      )}
    />
  );
};

export default Choice;
