import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  display: flex;
  transform: translateY(-15%);
  width: 90vw;
  right: 0;
  height: 47vh;
  z-index: 4;
  transition: all 0.2s ease;
`;

export const TextContainer = styled.div`
  width: 47%;
  height: 100%;
  padding-top: 8%;
  padding-left: 5%;
  transform: translateY(7%);
  background-color: #fff;

  img {
    width: 15%;
    margin-bottom: 3%;
  }

  h2 {
    font-size: 2.8rem;
  }

  p {
    font-size: 1.2rem;
    width: 70%;
  }
`;

export const ImageContainer = styled.div`
  width: 53%;
  height: 100%;
  background-color: #111;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ArrowContainer = styled.div`
  width: 50px;
  display: inline;
  height: 50px;
  align-items: center;

  button {
    background-color: #707070;
    border: none;
    transform: translateY(-8%);
    transition: all 0.2s ease;
    padding: 0.2rem 0.2rem 0;

    & + button {
      background: #000;
      &:hover {
        background: ${shade(0.1, '#333')};
      }
    }

    &:hover {
      background: ${shade(0.1, '#aaa')};
    }
  }

  img {
    object-fit: cover;
    height: 50px;
    width: 50px;
  }
`;

export const BarContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 2rem;
  margin-right: 5%;

  img {
    width: 100%;
    height: 100%;
  }
`;
