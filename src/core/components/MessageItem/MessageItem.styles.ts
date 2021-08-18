import { css, Theme } from "@emotion/react";
import { MessageItemVariant } from "./MessageItem.types";

export const messageContainerStyle = css`
  display: grid;
  grid-template-columns: 50px 1fr;
`;

export const messageContainerVariant = (variant: MessageItemVariant) => {
  if (variant === "conversation")
    return css`
      transform: rotate(180deg) scaleX(-1);
      padding-bottom: 16px;
    `;
  if (variant === "thread")
    return css`
      padding-bottom: 16px;
    `;
};

export const messageHeaderStyle = css`
  display: flex;
  align-items: center;
`;

// export const messageActionAreaStyle = css`
//   cursor: pointer;
// `;

export const repliesContainerStyle = css`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;
