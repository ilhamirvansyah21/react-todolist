// Import css method dari emotion
import { css } from "@emotion/core";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = (theme) =>
  css`
    text-align: center;

    color: ${theme.color.primary.black};
    font-size: 3.6rem;
    font-family: "Redressed", cursive;
    text-transform: uppercase;
  `;
