import styled from "styled-components";
import devices from "../../styles/breakpoints";
export const Wrapper = styled.div`
  width: 100%;
  background-color: #0e0e0e;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  width: 299px;
  height: 48px;
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #ffc700;
  margin: 0;
  white-space: nowrap;

  @media screen and (${devices.phone}) {
    font-size: 24px;
  }
`;

export const ArrowGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  background: #383a42;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  @media screen and (${devices.phone}) {
    font-size: 24px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 245px;
  overflow: hidden;

  @media screen and (${devices.phone}) {
    height: 140px;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    width: auto !important;
    margin-right: 16px;
  }

  .slick-slide:last-child {
    margin-right: 0;
  }
`;

export const ItemWrapper = styled.div`
  width: 180px !important;
  height: 245px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;

  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media screen and (${devices.phone}) {
    width: 102px !important;
    height: 140px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
