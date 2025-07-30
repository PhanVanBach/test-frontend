import Slider, { type Settings } from "react-slick";
import {
  NEW_COLLECTION_1,
  NEW_COLLECTION_2,
  NEW_COLLECTION_3,
  NEW_COLLECTION_4,
  NEW_COLLECTION_5,
  NEW_COLLECTION_6,
} from "../../assets";

import * as S from "./styled";
import React, { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  NEW_COLLECTION_1,
  NEW_COLLECTION_2,
  NEW_COLLECTION_3,
  NEW_COLLECTION_4,
  NEW_COLLECTION_5,
  NEW_COLLECTION_6,
];

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  variableWidth: true,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const NewCollections = () => {
  const sliderRef = React.useRef<Slider>(null);
  const prev = () => sliderRef.current?.slickPrev();
  const next = () => sliderRef.current?.slickNext();

  const handleClick = useCallback((index: number) => {
    console.log(`Clicked image #${index}`);
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>NEW NFT COLLECTIONS</S.Title>
        <S.ArrowGroup>
          <S.ArrowButton onClick={prev}>
            <FaChevronLeft size={14} />
          </S.ArrowButton>
          <S.ArrowButton onClick={next}>
            <FaChevronRight size={14} />
          </S.ArrowButton>
        </S.ArrowGroup>
      </S.Header>
      <S.SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, idx) => (
            <S.ItemWrapper key={idx} onClick={() => handleClick(idx)}>
              <img src={src} alt={`New Collection ${idx + 1}`} />
            </S.ItemWrapper>
          ))}
        </Slider>
      </S.SliderWrapper>
    </S.Wrapper>
  );
};

export default NewCollections;
