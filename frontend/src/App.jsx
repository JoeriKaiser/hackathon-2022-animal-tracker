import { useState } from 'react';
import './App.css';
import Logo from './components/common/Logo';
import MainLayout from './components/layouts/MainLayout';
import SectionLayout from './components/layouts/SectionLayout';
import StatsLayout from './components/layouts/StatsLayout';

function App() {
  return (
    <div className='App'>
      <MainLayout />
      <SectionLayout />
      <StatsLayout />
    </div>
  );
}

export default App;
