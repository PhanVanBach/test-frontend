import { BANNER_1 } from "../../assets";
import * as S from "./styled";
import Slider from "react-slick";

const banners = [BANNER_1, BANNER_1, BANNER_1, BANNER_1, BANNER_1, BANNER_1];

const HeroSection = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.SliderWrapper>
      <Slider {...setting}>
        {banners.map((src, i) => (
          <S.SlideImage key={i} src={src} alt={`Banner ${i + 1}`} />
        ))}
      </Slider>
    </S.SliderWrapper>
  );
};

export default HeroSection;
