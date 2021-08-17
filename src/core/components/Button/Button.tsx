/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
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
      css={(theme) => [
        buttonBackgroundColorStyle({ variant, color, size }, theme),
        buttonBorderRadiusStyle(size),
        buttonPaddingStyle(size),
        buttonStaticStyles,
      ]}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
