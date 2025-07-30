import type { ReactNode } from "react";
import * as S from "./styled";

export type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  disabled,
  onClick,
}: ButtonProps) => (
  <S.StyledButton variant={variant} disabled={disabled} onClick={onClick}>
    {children}
  </S.StyledButton>
);

export default Button;
