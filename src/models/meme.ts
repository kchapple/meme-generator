export type HexColor = `#${string}`;

export interface MemeProperties {
  url: string;
  scale: number;
  rotation: number;
  mirror: boolean;
  topText: string;
  bottomText: string;
  textColor: HexColor;
}

export interface ValidationFunction {
  (value: string | number): boolean;
}

export interface ChangeHandlerFunction {
  (newValue: string | number): void;
}
