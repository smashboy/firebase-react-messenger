import { css, Theme } from "@emotion/react";

export const inputWidthStyle = (fullWidth: boolean) =>
  fullWidth &&
  css`
    width: 100%;
  `;

export const inputStaticStyles = (theme: Theme) =>
  css`
    font-size: 16px;
    color: ${theme.colors.light.primary};
    font-family: ${theme.typography.fontFamily} Regular;
    padding: 10px 24px;
    background-color: #1a2025;
    border: 1px solid ${theme.colors.dark.additional};
    border-radius: 9px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${theme.colors.light.additional};
    }
  `;
