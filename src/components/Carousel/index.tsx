import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import truckIcon from '../../assets/slider_1_icon.svg';
import backIcon from '../../assets/slider_2_icon.svg';
import mapIcon from '../../assets/slider_3_icon.svg';
import {
  Container,
  ImageContainer,
  TextContainer,
  ArrowContainer,
  BarContainer,
} from './styles';
import carouselImg1 from '../../assets/slider_1.png';
import carouselImg2 from '../../assets/slider_2.png';
import carouselImg3 from '../../assets/slider_3.png';
import bar1 from '../../assets/bar_1.svg';
import bar2 from '../../assets/bar_2.svg';
import bar3 from '../../assets/bar_3.svg';

const Carousel: React.FC = () => {
  const slides = [
    {
      image: `${carouselImg1}`,
      text: 'Carousel 1',
      icon: `${truckIcon}`,
      scroller: `${bar1}`,
    },
    {
      image: `${carouselImg2}`,
      text: 'Carousel 2',
      icon: `${backIcon}`,
      scroller: `${bar2}`,
    },
    {
      image: `${carouselImg3}`,
      text: 'Carousel 3',
      icon: `${mapIcon}`,
      scroller: `${bar3}`,
    },
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <Container>
      <TextContainer>
        <img src={slides[current].icon} alt="" />
        <h2>{slides[current].text}</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
        <BarContainer>
          <img src={slides[current].scroller} alt="" />
        </BarContainer>
      </TextContainer>
      <ImageContainer>
        <img src={slides[current].image} alt="" />
        <ArrowContainer>
          <button type="button" onClick={prevSlide}>
            <IoIosArrowBack color="#fff" size={50} />
          </button>
          <button type="button" onClick={nextSlide}>
            <IoIosArrowForward color="#fff" size={50} />
          </button>
        </ArrowContainer>
      </ImageContainer>
    </Container>
  );
};

export default Carousel;
