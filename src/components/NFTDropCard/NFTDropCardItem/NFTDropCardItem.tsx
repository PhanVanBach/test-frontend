import { HOT_NFT, PROMOTION } from "../../../assets";
import * as S from "./styled";

const NFTDropCardItem = () => {
  return (
    <S.CardWrapper>
      <S.CardGridBox>
        <S.Label>HOT NFT</S.Label>
        <S.StaticCard>
          <img src={HOT_NFT} alt="HOT NFT" />
        </S.StaticCard>
      </S.CardGridBox>
      <S.CardGridBox>
        <S.Label>PROMOTION</S.Label>
        <S.StaticCard>
          <img src={PROMOTION} alt="PROMOTION" />
        </S.StaticCard>
      </S.CardGridBox>
    </S.CardWrapper>
  );
};

export default NFTDropCardItem;
