import { Theme } from "@emotion/react";
import { IconColor } from "./types";

export const getColor = (propKey: IconColor, theme: Theme) => {
  switch (propKey) {
    case "primary":
      return theme.colors.light.primary;
    default:
      return theme.colors.light.secondary;
  }
};
