import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Logo from './components/common/Logo';
import MainLayout from './components/layouts/MainLayout';
import SectionLayout from './components/layouts/SectionLayout';
import StatsLayout from './components/layouts/StatsLayout';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './components/carousel.css';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalContext } from './assets/context/AnimalContext';

function App() {
  const animalContext = useContext(GlobalContext);
  const [animalsArray, setAnimalsArray] = animalContext.animal;
  const [statusArray, setStatusArray] = animalContext.status;
  const getAnimalData = () => {
    axios
      .get('http://localhost:5000/api/animals')
      .then((response) => setAnimalsArray(response.data[0]));
  };
  const getStatusData = () => {
    axios.get('http://localhost:5000/api/data').then((response) => {
      const lastElement = response.data.length;
      setStatusArray(response.data[lastElement - 1]);
    });
  };

  useEffect(() => {
    getAnimalData();
    getStatusData();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
