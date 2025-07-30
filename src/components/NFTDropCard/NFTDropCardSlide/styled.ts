import styled from "styled-components";
import devices from "../../../styles/breakpoints";

export const SectionWrapper = styled.div`
  /* max-width: 600px; */
  flex: 1;
  cursor: pointer;
`;
export const SectionTitle = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
export const Label = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #ffc700;
  white-space: nowrap;

  @media screen and (${devices.phone}) {
    font-size: 24px;
  }
`;
export const NavButtons = styled.div`
  display: flex;
  gap: 8px;
  button {
    width: 40px;
    height: 40px;
    padding: 8px;
    background-color: #383a42;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    @media screen and (${devices.phone}) {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

    svg {
      color: #fff;
      font-size: 14px;
    }

    &:hover {
      background-color: #333;
    }
  }
`;
export const DropSlider = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  border-radius: 12px;
  height: 240px;
  @media screen and (${devices.phone}) {
    height: 171px;
  }
`;

export const SliderTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ currentIndex }) => `-${currentIndex * 100}%`});
  height: 240px;
`;

export const SlideItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
