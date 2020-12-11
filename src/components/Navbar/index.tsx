import React, { useState } from 'react';
import { Container, Logo, Menu, StyledMenu } from './styles';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(0);

  return (
    <Container>
      <Logo />
      <Menu onClick={() => setSidebar(1)} />
      <StyledMenu display={sidebar} />
    </Container>
  );
};

export default Navbar;
