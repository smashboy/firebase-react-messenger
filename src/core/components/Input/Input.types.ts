import { CssProps } from "../../types";

export type InputProps = React.ComponentProps<"input"> & {
  fullWidth?: boolean;
  css?: CssProps;
};
