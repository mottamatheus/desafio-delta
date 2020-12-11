import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
      <HeroSection />
      <Carousel />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
