import styled from 'styled-components';
import logoImg from '../../assets/logo.svg';
import menuIcon from '../../assets/menu.svg';

interface SidebarProps {
  display: number;
}

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 5.2rem;
  z-index: 2;
  width: 100vw;
  background-color: var(--text-secondary);
`;

export const Logo = styled.div`
  z-index: 2;
  min-height: 100%;
  width: 10rem;
  color: #fff;
  margin-left: 7%;
  background: url(${logoImg}) no-repeat center;
  background-size: contain;
`;

export const Menu = styled.div`
  width: 3rem;
  margin-right: 5vw;
  height: 80%;
  transform: translate(0, 35%);
  background: url(${menuIcon}) no-repeat;
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${(props: SidebarProps): string =>
    props.display === 0 ? '0' : '0'};
  justify-content: center;
  background: red;
  height: 100vh;
  width: 20vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
`;
