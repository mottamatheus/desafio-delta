import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 5.2rem;
  z-index: 1;
  width: 100vw;
  background-color: var(--text-secondary);
  transition: all 0.2s ease-in-out;

  img {
    position: absolute;
    width: 10rem;
    margin-left: 7%;
    object-fit: cover;
    transform: translate(0, 50%);
  }

  button {
    border: none;
    right: 0;
    position: absolute;
    z-index: 5;
    background: none;
    margin-right: 5vw;
    transform: translate(0, 50%);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #999;
    }

    img {
      width: 3rem;
    }
  }
`;

export const Menu = styled.div`
  width: 3rem;
  right: 0;
  position: absolute;
  margin-right: 5vw;
  height: 80%;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  opacity: 0;
  justify-content: flex-start;
  background: #ffc502;
  height: 100vh;
  width: 20vw;
  text-align: left;
  padding: 5rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;

  button {
    left: 0;
    top: 0;
    margin-left: 3rem;
  }

  ul {
    margin-top: 4rem;
    list-style: none;
    font-size: 2.4rem;

    li {
      margin-bottom: 3rem;
      font-weight: bold;
      transition: color 0.2s ease;
      cursor: pointer;

      &:hover {
        color: #999;
      }
    }
  }
`;

export const Background = styled.div`
  opacity: 0;
  transition: all 0.3s ease-in-out;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
