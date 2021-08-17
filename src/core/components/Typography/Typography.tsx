/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { CssProps } from "../../types";
import { getCssProps } from "../../utils";
import { capitalizeFirstLetter, getColor, getFontWeight } from "./utils";

export type TypographyFontWeight = "light" | "normal" | "medium" | "bold";
export type TypographyColor = "primary" | "secondary" | "additional";

export type TypographyProps = {
  component?: keyof JSX.IntrinsicElements;
  size?: number;
  lineHeight?: number;
  fontStyle?: "regular" | "medium";
  color?: TypographyColor;
  css?: CssProps;
  fontWeight?: TypographyFontWeight;
};

const Typography: React.FC<TypographyProps> = ({
  component: Component = "div",
  size = 16,
  fontWeight = "normal",
  lineHeight,
  fontStyle = "regular",
  color = "secondary",
  css,
  children,
  ...otherProps
}) => {
  return (
    <Component
      css={(theme) => ({
        fontFamily: `${theme.typography.fontFamily} ${capitalizeFirstLetter(fontStyle)}`,
        fontSize: `${size}px`,
        fontWeight: getFontWeight(fontWeight, theme),
        color: getColor(color, theme),
        lineHeight: lineHeight ? `${lineHeight}px` : undefined,
        ...getCssProps(theme, css),
      })}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Typography;
