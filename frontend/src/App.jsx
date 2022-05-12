import { useState } from 'react';
import './App.css';
import Logo from './components/common/Logo';
import MainLayout from './components/layouts/MainLayout';
import SectionLayout from './components/layouts/SectionLayout';
import StatsLayout from './components/layouts/StatsLayout';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [AnimalsArray, setAnimalsArray] = useState();
  const getAnimalData = () => {
    axios
      .get('http://localhost:5000/api/animals')
      .then((response) => setAnimalsArray(response.data[0]));
  };
  console.log(AnimalsArray);

  useEffect(() => {
    getAnimalData();
    console.log(AnimalsArray);
  }, []);

  return (
    <div className='App'>
      <MainLayout />
      <SectionLayout />
      <StatsLayout />
    </div>
  );
}

export default App;
