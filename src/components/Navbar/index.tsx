import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, StyledMenu } from './styles';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <Logo />
      <Link to=".">
        <Menu onClick={showSidebar} />
      </Link>
      <StyledMenu style={{ display: sidebar ? 'flex' : 'none' }} />
    </Container>
  );
};

export default Navbar;
