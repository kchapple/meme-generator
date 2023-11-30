export interface ImageProperties {
  url: string;
  scale: number;
  rotation: number;
}

export type HexColor = `#${string}`;

export interface MemeProperties {
  top: string;
  bottom: string;
  color: HexColor;
}

export interface ValidationFunction {
  (value: string | number): boolean;
}
