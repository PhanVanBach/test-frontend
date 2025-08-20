import type { ReactNode } from "react";
import styled from "styled-components";
import devices from "../../styles/breakpoints";

type NavbarButtonProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const NavbarButton = ({
  children,
  active = false,
  ...props
}: NavbarButtonProps) => {
  return (
    <StyledNavbarButton $active={active} {...props}>
      {children}
    </StyledNavbarButton>
  );
};

export default NavbarButton;

type StyledProps = {
  $active?: boolean;
};

const StyledNavbarButton = styled.button<StyledProps>`
  background: ${(props) => (props.$active ? "#383A42" : "transparent")};
  color: ${(props) => (props.$active ? "#FFC700" : "#d2d2d2")};
  padding: 8px 18px;
  height: 40px;
  min-width: 80px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease;

  -webkit-tap-highlight-color: transparent;
  user-select: none;
  appearance: none;

  &:hover {
    background: ${(props) => (props.$active ? "#2d2d2d" : "#333")};
    color: #ffc700;
  }
  @media screen and (${devices.phone}) {
    width: 100%;
    padding: 8px 20px;
    height: 48px;
    border-radius: 100px;

    font-size: 14px;
    font-weight: 500;

    background: ${(props) => (props.$active ? "#383A42" : "transparent")};
    color: ${(props) => (props.$active ? "#FFC700" : "#d2d2d2")};
  }
`;
