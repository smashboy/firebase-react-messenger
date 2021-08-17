import { Theme } from "@emotion/react";
import { TypographyColor, TypographyFontWeight } from "./Typography";

export const getFontWeight = (propKey: TypographyFontWeight, theme: Theme) => {
  switch (propKey) {
    case "light":
      return theme.typography.fontWeight.light;
    case "bold":
      return theme.typography.fontWeight.bold;
    case "normal":
      return theme.typography.fontWeight.normal;
    default:
      return theme.typography.fontWeight.medium;
  }
};

export const getColor = (propKey: TypographyColor, theme: Theme) => {
  switch (propKey) {
    case "primary":
      return theme.colors.light.primary;
    case "secondary":
      return theme.colors.light.secondary;
    default:
      return theme.colors.light.additional;
  }
};

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
