import { useState } from 'react';
import './App.css';
import Logo from './components/common/Logo';

import axios from 'axios';
import { useEffect } from 'react';
import AnimalContext from './assets/context/AnimalContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [animalsArray, setAnimalsArray] = useState();
  const getAnimalData = () => {
    axios
      .get('http://localhost:5000/api/animals')
      .then((response) => setAnimalsArray(response.data[0]));
  };

  useEffect(() => {
    getAnimalData();
  }, []);

  return (
    <Router>
      <div className='App'>
        <AnimalContext.Provider value={{ animalsArray, setAnimalsArray }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </AnimalContext.Provider>
      </div>
    </Router>
  );
}

export default App;
