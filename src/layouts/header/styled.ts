import styled from "styled-components";
import devices from "../../styles/breakpoints";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  height: 80px;
  padding: 20px 40px;
  background-color: #0e0e0e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (${devices.phone}) {
    padding: 12px 20px;
    height: 60px;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media screen and (${devices.phone}) {
    gap: 0px;
  }
`;
export const Logo = styled.div`
  max-width: 112px;
  height: 40px;

  @media screen and (${devices.phone}) {
    width: 112px;
    height: 36px;
  }

  img {
    height: 100%;
    object-fit: contain;
    display: block;
    margin-left: 16px;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media screen and (${devices.phone}) {
    display: none;
  }
`;
export const RightButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media screen and (${devices.phone}) {
    gap: 8px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  @media screen and (${devices.phone}) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media screen and (${devices.phone}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    padding-top: 80px;
    background-color: #1f2023;
    padding-inline: 20px;
    z-index: 999;
    gap: 20px;
    transform: ${(props) =>
      props.$open ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;
