import { CssProps } from "../../types";

export type AvatarSize = "small" | "medium";

export type AvatarProps = React.ComponentProps<"img"> & {
  size?: AvatarSize;
  css?: CssProps;
};
