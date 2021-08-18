import { css, Theme } from "@emotion/react";

export const messageContainerStyle = css`
  display: grid;
  grid-template-columns: 50px 1fr;
  padding-bottom: 16px;
  transform: rotate(180deg) scaleX(-1);
`;

export const messageHeaderStyle = css`
  display: flex;
  align-items: center;
`;

export const messageActionAreaStyle = css`
  cursor: pointer;
`;

export const repliesContainerStyle = css`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;
