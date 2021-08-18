/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { getCssProps } from "../../utils";
import {
  buttonBackgroundColorStyle,
  buttonBorderRadiusStyle,
  buttonPaddingStyle,
  buttonStaticStyles,
} from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "default",
  size = "medium",
  css,
  children,
  ...otherProps
}) => {
  return (
    <button
      // @ts-ignore
      css={(theme) => [
        buttonBackgroundColorStyle({ variant, color, size }, theme),
        buttonBorderRadiusStyle(size),
        buttonPaddingStyle(size),
        buttonStaticStyles,
        getCssProps(theme, css),
      ]}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
