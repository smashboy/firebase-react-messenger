import { Theme } from "@emotion/react";
import { ButtonColor } from "./Button";

export const getColor = (propKey: ButtonColor, theme: Theme) => {
  switch (propKey) {
    case "primary":
      return theme.colors.light.primary;
    default:
      return theme.colors.dark.additional;
  }
};
