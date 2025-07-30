import styled from "styled-components";
import devices from "../../styles/breakpoints";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  gap: 24px;
  padding: 0px 236px;
  background-color: #1f2023;

  @media screen and (${devices.phone}) {
    height: 92px;
    padding: 16px;
    gap: 8px;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s;
  min-width: 90px;
  max-width: 120px;

  -webkit-tap-highlight-color: transparent;
  user-select: none;
  appearance: none;

  @media screen and (${devices.phone}) {
    padding: 0;
    min-width: 60px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #2d2d2d;
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const Icon = styled.img`
  width: 105px;
  height: 74px;

  @media screen and (${devices.phone}) {
    width: 65px;
    height: 50px;
  }
`;
