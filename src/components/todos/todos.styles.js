import { css } from "@emotion/core";

export const todos = () =>
  css`
    display: flex;
    flex-direction: column;
    min-height: 500px;
  `;

export const todoPlaceholderText = () =>
  css`
    font-family: "Redressed", sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 16px;
  `;

export const addButtonPlaceholderText = () =>
  css`
    font-family: "Bungee Shade", sans-serif;
    font-size: 24px;
  `;
