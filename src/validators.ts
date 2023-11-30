import { ValidationFunction } from "./models/meme";

export const validateScale: ValidationFunction = (value: number | string) => {
  return parseInt(value as string) >= 1 && parseInt(value as string) <= 200;
};

export const validateRotation: ValidationFunction = (
  value: number | string
) => {
  return parseInt(value as string) >= 0 && parseInt(value as string) <= 360;
};

export const validateString: ValidationFunction = (value: string | number) => {
  return typeof value === "string";
};
