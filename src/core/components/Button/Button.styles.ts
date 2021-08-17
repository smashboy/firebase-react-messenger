import { css, Theme } from "@emotion/react";
import { ButtonProps, ButtonSize } from "./Button.types";
import { getColor } from "./Button.utils";

export const buttonBackgroundColorStyle = (
  { variant, size, color }: ButtonProps,
  theme: Theme
) => css`
  ${variant === "contained" && size === "medium" && color === "default"
    ? "background-color:#1a2025"
    : variant === "contained"
    ? `background-color: ${getColor(color, theme)}`
    : "background-color: transparent"};
`;

export const buttonBorderRadiusStyle = (size: ButtonSize) =>
  css`
    ${size === "medium" ? "border-radius: 9px" : "border-radius: 3px"}
  `;

export const buttonPaddingStyle = (size: ButtonSize) =>
  css`
    ${size === "medium" ? "padding: 5px 15px" : "padding: 0"}
  `;

export const buttonStaticStyles = css`
  border: none;
  cursor: pointer;
`;
