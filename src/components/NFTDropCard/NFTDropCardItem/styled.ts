import styled from "styled-components";
import devices from "../../../styles/breakpoints";

export const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;
export const CardGridBox = styled.div``;

export const Label = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #ffc700;
  margin-bottom: 8px;

  @media screen and (${devices.phone}) {
    font-size: 24px;
  }
`;
export const StaticCard = styled.div`
  height: 240px;
  aspect-ratio: 1;
  max-width: 240px;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (${devices.phone}) {
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
