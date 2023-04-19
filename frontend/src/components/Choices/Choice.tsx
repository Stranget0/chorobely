import mainPageStore from "../../stores/mainPage/mainPage";
import classNames from "classnames";

interface Props {
  children: HTMLElement | undefined;
  index: number;
}

const Choice = ({ children, index }: Props) => {
  const handleClick = () => {
    const { choices, revert } = mainPageStore.getState();
    const revertSteps = choices.length - index;
    revert(revertSteps);
  };

  const backgroundImage = children?.style.backgroundImage;

  return (
    <button
      onClick={handleClick}
      style={{ "background-image": backgroundImage }}
      tabIndex={backgroundImage ? 0 : -1}
      aria-hidden={!backgroundImage}
      class={classNames('radius rounded-full aspect-square w-16 animate-appear-300 bg-stone-100 bg-cover bg-center', !backgroundImage && "pointer-events-none")}
    />
  );
};

export default Choice;
