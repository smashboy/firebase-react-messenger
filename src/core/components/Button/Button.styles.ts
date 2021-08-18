import { css, Theme } from "@emotion/react";
import { ButtonProps, ButtonSize } from "./Button.types";
import { getColor } from "./Button.utils";

export const buttonBackgroundColorStyle = ({ variant, size, color }: ButtonProps, theme: Theme) => {
  if (variant === "contained" && size === "medium" && color === "default")
    return css`
      background-color: #1a2025;
    `;
  if (variant === "contained")
    return css`
      background-color: ${getColor(color, theme)};
    `;
  return css`
    background-color: transparent;
  `;
};

export const buttonBorderRadiusStyle = (size: ButtonSize) => {
  if (size === "medium")
    return css`
      border-radius: 9px;
    `;
  return css`
    border-radius: 3px;
  `;
};

export const buttonPaddingStyle = (size: ButtonSize) => {
  if (size === "medium")
    return css`
      padding: 5px 15px;
    `;
  return css`
    padding: 0;
  `;
};

export const buttonStaticStyles = css`
  border: none;
  cursor: pointer;
`;
