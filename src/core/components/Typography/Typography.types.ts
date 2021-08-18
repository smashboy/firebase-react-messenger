import { CssProps } from "../../types";

export type TypographyFontWeight = "light" | "normal" | "medium" | "bold";
export type TypographyColor = "brand" | "primary" | "secondary" | "additional";
export type TypographyFontStyle = "regular" | "medium" | "bold" | "light";

export type TypographyProps = {
  component?: keyof JSX.IntrinsicElements;
  size?: number;
  lineHeight?: number;
  fontStyle?: TypographyFontStyle;
  color?: TypographyColor;
  css?: CssProps;
  fontWeight?: TypographyFontWeight;
};
