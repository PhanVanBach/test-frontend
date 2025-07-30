import styled from "styled-components";
import devices from "../../styles/breakpoints";
import NFTDropCardSlide from "./NFTDropCardSlide/NFTDropCardSlide";
import NFTDropCardItem from "./NFTDropCardItem/NFTDropCardItem";
import { DROP_CALENDER_1 } from "../../assets";

type Item = {
  image: string;
  label: string;
};

const items: Item[] = [
  { image: DROP_CALENDER_1, label: "drop-calender" },
  { image: DROP_CALENDER_1, label: "drop-calender" },
  { image: DROP_CALENDER_1, label: "drop-calender" },
];

const NFTDropCard = () => {
  return (
    <NFTDropCardWrapper>
      <NFTDropCardSlide items={items} />
      <NFTDropCardItem />
    </NFTDropCardWrapper>
  );
};

export default NFTDropCard;

export const NFTDropCardWrapper = styled.div`
  height: 296px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
  margin-top: 80px;

  @media screen and (${devices.tablet}) {
    height: auto;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-top: 40px;
  }
`;
