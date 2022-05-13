import React, { useContext } from 'react';
import { GlobalContext } from '../../assets/context/AnimalContext';
import Bar from './Bar';

function Chart() {
  const animalContext = useContext(GlobalContext);
  const [statusArray] = animalContext.status;
  const [chartArray] = animalContext.chart;
  const statusData = statusArray;

  const convertDataToPercentage = (x) => {
    if (x === undefined) {
      return 0;
    }
    return Math.abs(Math.ceil(-7.1428 * x + 114.28)); // dedicacee à Christel
  };

  const dataArray = [];
  chartArray.map((el) => {
    dataArray.push(el.datas);
  });

  const percentArray = [];
  const donnee = convertDataToPercentage();
  dataArray.forEach((element) => {
    percentArray.push(convertDataToPercentage(element));
  });
  const newPercentArray = percentArray.slice(-12);
  console.log('coucou new', newPercentArray);

  return (
    <div className='chart-base-container'>
      <h3>Relevée sur les 12 dernières heures</h3>
      <div className='chart-container'>
        {newPercentArray.map((el) => (
          <Bar donnee={el} />
        ))}
      </div>
    </div>
  );
}

export default Chart;
