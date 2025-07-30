import styled, { css } from "styled-components";
import type { ButtonVariant } from "./Button";
import devices from "../../styles/breakpoints";

type ButtonProps = {
  variant: ButtonVariant;
  disabled?: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 127px;
  padding: 8px 32px;
  border-radius: 100px;
  gap: 8px;
  font-weight: 900;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  @media screen and (${devices.phone}) {
    height: 36px;
    width: 98px;
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: #ffc700;
      color: #1f1f1f;
      border: none;

      &:hover {
        background: #ca9a09ff;
      }
      &:disabled {
        background: rgba(255, 200, 0, 0.8);
        color: #1f1f1f;
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: #1f1f1f;
      color: #fff;
      border: 1px solid #ffc700;

      &:hover {
        color: #c6c6c6ff;
        border: 1px solid #ffe8ab;
      }

      &:disabled {
        color: #d2d2d2;
        border-color: rgba(255, 199, 0, 0.8);
        cursor: not-allowed;
      }
    `}
`;
