import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  transform: translateY(-15%);
  width: 90vw;
  right: 0;
  height: 47vh;
  z-index: 4;
`;

export const Text = styled.div`
  width: 47%;
  height: 100%;
  transform: translateY(7%);
  background-color: #fff;
`;

export const Image = styled.div`
  width: 53%;
  height: 100%;
  background-color: #111;
`;
