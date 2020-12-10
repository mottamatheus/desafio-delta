import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GlobalStyle />
    </>
  );
};

export default App;
