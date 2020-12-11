import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel />
      <GlobalStyle />
    </>
  );
};

export default App;
