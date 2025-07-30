import {
  FREE_TO_EARN,
  HOW_TO_BUY,
  NEW_NFTS,
  RANKING,
  ROAD_MAPS,
  VIDEO_NFT,
} from "../../assets";
import * as S from "./styled";

const menuItems = [
  { icon: FREE_TO_EARN, label: "FREE TO EARN" },
  { icon: RANKING, label: "RANKING" },
  { icon: VIDEO_NFT, label: "VIDEO-NFT" },
  { icon: HOW_TO_BUY, label: "HOW TO BUY" },
  { icon: NEW_NFTS, label: "NEW NFTs" },
  { icon: ROAD_MAPS, label: "ROADMAP" },
];

const MenuBar = () => {
  return (
    <S.MenuWrapper>
      {menuItems.map((item, index) => (
        <S.MenuButton key={index}>
          <S.Icon src={item.icon} alt={item.label} />
        </S.MenuButton>
      ))}
    </S.MenuWrapper>
  );
};

export default MenuBar;
