import { Theme } from "@emotion/react";
import { IconColor } from "./types";

export const getColor = (propKey: IconColor, theme: Theme) => {
  switch (propKey) {
    case "primary":
      return theme.colors.light.primary;
    case "additional":
      return theme.colors.light.additional;
    default:
      return theme.colors.light.secondary;
  }
};
