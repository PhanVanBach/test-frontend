import { useState } from "react";

import * as S from "./styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type CarouseItem = {
  label: string;
  image: string;
};

type NFTDropSliderProps = {
  items: CarouseItem[];
};

const NFTDropCardSlide = ({ items }: NFTDropSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.SectionWrapper>
      <S.SectionTitle>
        <S.Label>NFT DROPS CALENDAR</S.Label>
        <S.NavButtons>
          <button onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext}>
            <FaChevronRight />
          </button>
        </S.NavButtons>
      </S.SectionTitle>

      <S.DropSlider>
        <S.SliderTrack currentIndex={currentIndex}>
          {items.map((item, index) => (
            <S.SlideItem key={index}>
              <img src={item.image} alt={item.label} />
            </S.SlideItem>
          ))}
        </S.SliderTrack>
      </S.DropSlider>
    </S.SectionWrapper>
  );
};

export default NFTDropCardSlide;
