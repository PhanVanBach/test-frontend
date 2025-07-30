import HeroSection from "../../components/HeroSection/HeroSection";
import MenuBar from "../../components/MenuBar/MenuBar";
import NewCollections from "../../components/NewCollections/NewCollections";
import NFTDropCard from "../../components/NFTDropCard/NFTDropCard";
import * as S from "./styled";

const Home = () => {
  return (
    <S.HomeWrapper>
      <HeroSection />
      <MenuBar />
      <S.ContentWrap>
        <NewCollections />
        <NFTDropCard />
      </S.ContentWrap>
    </S.HomeWrapper>
  );
};

export default Home;
