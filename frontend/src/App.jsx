import { useState } from 'react';
import './App.css';
import Logo from './components/common/Logo';
import MainLayout from './components/layouts/MainLayout';
import SectionLayout from './components/layouts/SectionLayout';
import StatsLayout from './components/layouts/StatsLayout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './components/carousel.css';

function App() {
  return (
    <div className='App'>
      <MainLayout />
      <SectionLayout />
      <Carousel>
            <StatsLayout />
            <StatsLayout />
            <StatsLayout />
            <StatsLayout />
            </Carousel>
    </div>
    
  );
}



export default App;
