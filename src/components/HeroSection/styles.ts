import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/hero_section.png';

export const Container = styled.div`
  div {
    position: relative;
    align-items: center;
    justify-content: center;
    background: ${shade(1, '#111')} url(${backgroundImg}) no-repeat center
      center;
    background-size: cover;
    height: 50vh;
    width: 100vw;

    h1 {
      position: absolute;
      margin-left: 7%;
      font-family: Arial, Helvetica, sans-serif;
      width: 55%;
      font-size: 5.5rem;
      color: var(--text-primary);
      top: 50%;
      transform: translate(0, -50%);

      &::after {
        content: '';
        display: block;
        position: absolute;
        margin-top: 1.6rem;
        background: var(--bg);
        height: 1.5rem;
        width: 12rem;
      }
    }
  }
`;
