export const computeTransformStyle = (
  scale: number,
  rotation: number,
  mirror: boolean
): string => {
  let computedScaleX = scale / 100;
  const computedScaleY = scale / 100;
  if (mirror) {
    computedScaleX *= -1;
  }
  return `scaleX(${computedScaleX}) scaleY(${computedScaleY}) rotate(${rotation}deg)`;
};
