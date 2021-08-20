import { css, Theme } from "@emotion/react";
import { DividerOrientaion } from "./Divider.types";

export const dividerStaticStyles = (theme: Theme) =>
  css`
    border: none;
    margin: 0;
    background-color: ${theme.colors.dark.additional};
  `;

export const dividerOrientationStyle = (orientation: DividerOrientaion) =>
  orientation === "horizontal"
    ? css`
        height: 1px;
      `
    : css`
        width: 1px;
      `;
