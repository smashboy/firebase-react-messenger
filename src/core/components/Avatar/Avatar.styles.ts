import { css } from "@emotion/react";
import { AvatarSize } from "./Avatar.types";

export const avatarSizeStyle = (size: AvatarSize) =>
  size === "medium"
    ? css`
        width: 38px;
        height: 38px;
      `
    : css`
        width: 28px;
        height: 28px;
      `;

export const avatarStaticStyles = css`
  border-radius: 4px;
`;
