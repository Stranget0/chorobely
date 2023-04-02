export function getStageFromState({
  stages,
  choices,
}: {
  choices: unknown[];
  stages: HTMLDivElement[];
}) {
  return stages[choices.length];
}
