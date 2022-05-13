import { useContext, useState } from 'react';
import './App.css';
import Logo from './components/common/Logo';
import axios from 'axios';
import { useEffect } from 'react';
// import AnimalContext from './assets/context/AnimalContext';
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
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => setStatusArray(response.data[0]));
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
