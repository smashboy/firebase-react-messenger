import { css, Theme } from "@emotion/react";
import { TypographyColor, TypographyFontStyle, TypographyFontWeight } from "./Typography.types";
import { capitalizeFirstLetter, getFontWeight, getColor } from "./Typography.utils";

export const typographyFontFamilyStyle = (fontStyle: TypographyFontStyle, theme: Theme) =>
  css`
    font-family: ${theme.typography.fontFamily} ${capitalizeFirstLetter(fontStyle)};
  `;

export const typographyFontSizeStyle = (size: number) =>
  css`
    font-size: ${size}px;
  `;

export const typographyFontWeightStyle = (fontWeight: TypographyFontWeight, theme: Theme) =>
  css`
    font-weight: ${getFontWeight(fontWeight, theme)};
  `;

export const typographyColorStyle = (color: TypographyColor, theme: Theme) =>
  css`
    color: ${getColor(color, theme)};
  `;

export const typographyLineHeight = (lineHeight?: number) =>
  lineHeight &&
  css`
    line-height: ${lineHeight}px;
  `;
