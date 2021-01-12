import { css } from "@emotion/core";

export const add = () =>
  css`
    padding: 16px;
  `;

export const addForm = () =>
  css`
    display: flex;
    align-items: center;
  `;

export const addInput = ({ theme }) =>
  css`
    background: unset;
    border: unset;
    padding: 0 64px;
    flex: 1;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-family: "Redressed", cursive;
    font-size: 24px;
    text-transform: lowercase;
  `;

export const addBtn = ({ theme }) =>
  css`
    font-size: 1.8rem;
    font-family: "Bungee Shade", cursive;
    padding: 16px;
    padding-right: unset;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    &:active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
    }
  `;
