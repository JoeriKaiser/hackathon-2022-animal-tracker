import React, { useContext } from 'react';
import { GlobalContext } from '../../assets/context/AnimalContext';

function Chart() {
  const animalContext = useContext(GlobalContext);
  const [statusArray] = animalContext.status;
  const data = statusArray;
  console.log(data.datas);

  return (
    <div className='chart-container'>
      <div style={{ height: data.datas }} className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  );
}

export default Chart;
