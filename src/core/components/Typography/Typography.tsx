/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { getCssProps } from "../../utils";
import {
  typographyColorStyle,
  typographyFontFamilyStyle,
  typographyFontSizeStyle,
  typographyFontWeightStyle,
  typographyLineHeight,
} from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

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
      css={(theme) => [
        typographyFontFamilyStyle(fontStyle, theme),
        typographyFontSizeStyle(size),
        typographyFontWeightStyle(fontWeight, theme),
        typographyColorStyle(color, theme),
        typographyLineHeight(lineHeight),
      ]}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Typography;
