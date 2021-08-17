import { CssProps } from "../../types";

export type TypographyFontWeight = "light" | "normal" | "medium" | "bold";
export type TypographyColor = "primary" | "secondary" | "additional";
export type TypographyFontStyle = "regular" | "medium";

export type TypographyProps = {
  component?: keyof JSX.IntrinsicElements;
  size?: number;
  lineHeight?: number;
  fontStyle?: TypographyFontStyle;
  color?: TypographyColor;
  css?: CssProps;
  fontWeight?: TypographyFontWeight;
};
