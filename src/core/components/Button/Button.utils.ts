import { Theme } from "@emotion/react";
import { ButtonColor } from "./Button.types";

export const getColor = (propKey: ButtonColor | undefined, theme: Theme) => {
  switch (propKey) {
    case "brand":
      return theme.colors.brand;
    default:
      return theme.colors.dark.additional;
  }
};
