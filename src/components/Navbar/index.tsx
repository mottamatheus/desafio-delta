import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Container, Menu, Sidebar, Background } from './styles';
import menuIcon from '../../assets/menu.svg';
import logoImg from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(0);
  const [index, setIndex] = useState(2);

  return (
    <Container style={{ zIndex: index }}>
      <Menu onClick={() => setSidebar(1)} />
      <img
        style={{ zIndex: index, opacity: `${sidebar === 1 ? '0.4' : '1'}` }}
        src={logoImg}
        alt="a"
      />
      <button
        onClick={() => {
          setSidebar(1);
          setIndex(10);
        }}
        type="button"
      >
        <img src={menuIcon} alt="a" />
      </button>
      <div>
        <Sidebar style={{ opacity: sidebar, zIndex: index }}>
          <button
            type="button"
            onClick={() => {
              setSidebar(0);
              setIndex(2);
            }}
          >
            <IoMdClose size={30} />
          </button>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
          </ul>
        </Sidebar>
        <Background style={{ opacity: sidebar, zIndex: index }} />
      </div>
    </Container>
  );
};

export default Navbar;
