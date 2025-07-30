import styled from "styled-components";
import devices from "../../styles/breakpoints";

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  .slick-dots {
    bottom: 16px;
    display: flex !important;
    justify-content: center;
    gap: 8px;

    @media screen and (${devices.phone}) {
      gap: 4px;
    }
  }

  .slick-dots li {
    width: 28px;
    height: 4px;
    border-radius: 20px;
    background-color: #6e6e6e;
    transition: all 0.3s;

    @media screen and (${devices.phone}) {
      width: 16px;
      height: 4px;
    }
  }

  .slick-dots li.slick-active {
    background-color: #ffc700;
  }

  .slick-dots li button {
    width: 100%;
    height: 100%;
    padding: 0;
    opacity: 0;
    cursor: pointer;
  }

  .slick-dots li button:before {
    display: none;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 450px;
  aspect-ratio: 16 / 5;
  object-fit: cover;
  display: block;
  vertical-align: bottom;

  @media screen and (${devices.phone}) {
    height: 180px;
  }
`;
