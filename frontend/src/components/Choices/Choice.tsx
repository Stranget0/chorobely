import mainPageStore from "../../stores/mainPage/mainPage";

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
  return (
    <button
      onClick={handleClick}
      style={{ "background-image": children?.style.backgroundImage }}
      class='radius rounded-full aspect-square w-16 animate-appear-300 bg-stone-100 bg-cover bg-center'
    />
  );
};

export default Choice;
