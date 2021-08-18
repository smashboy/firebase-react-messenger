import { css } from "@emotion/react";
import { AvatarSize } from "./Avatar.types";

export const avatarSizeStyle = (size: AvatarSize) =>
  css`
    ${size === "medium" ? "width: 38px; height: 38px" : "width: 28px; height: 28px"}
  `;

export const avatarStaticStyles = css`
  border-radius: 4px;
`;
