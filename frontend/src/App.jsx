import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/carousel.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalContext } from './assets/context/AnimalContext';

function App() {
  const animalContext = useContext(GlobalContext);
  const [blob, setBlob] = useState('');
  const [animalsArray, setAnimalsArray] = animalContext.animal;
  const [statusArray, setStatusArray] = animalContext.status;
  const [chartArray, setChartArray] = animalContext.chart;
  const getAnimalData = () => {
    axios
      .get('http://localhost:5000/api/animals')
      .then((response) => setAnimalsArray(response.data[0]));
  };
  const getStatusData = () => {
    axios.get('http://localhost:5000/api/data').then((response) => {
      setChartArray(response.data);
      const lastElement = response.data.length;
      setStatusArray(response.data[lastElement - 1]);
    });
  };
  // const getBlob = () => {
  //   axios
  //     .get('http://localhost:5000/api/animals/blob', { responseType: 'blob' })
  //     .then((response) => {
  //       console.log(typeof response.data);
  //       return response.blob().then((myBlob) => {
  //         setBlob = URL.createObjectURL(myBlob);
  //       });
  //     });
  // };

  useEffect(() => {
    // getBlob();
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
