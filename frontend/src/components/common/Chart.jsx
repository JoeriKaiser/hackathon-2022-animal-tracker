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

  // console.log(dataArray);

  return (
    <div className='chart-container'>
      {percentArray.map((el) => (
        <Bar donnee={el} />
      ))}
    </div>
  );
}

export default Chart;
