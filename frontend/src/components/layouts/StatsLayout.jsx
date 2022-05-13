import React from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../../assets/context/AnimalContext';
import chart from '../../assets/img/Chart-11.png';
import ReviewsBar from '../common/ReviewsBar';

function StatsLayout() {
  const animalContext = useContext(GlobalContext);
  const [animalsArray] = animalContext.animal;
  const [statusArray] = animalContext.status;
  const animalUUID = animalsArray.uuid;
  const statusUUID = statusArray.uuid;
  console.log(statusArray.datas);
  const statusData = statusArray.data;
  const [reviewScore, setReviewScore] = useState(10);

  const convertDataToPercentage = (y, x) => {
    return (y / x) * 100;
  };
  console.log(convertDataToPercentage(10, 17));
  return (
    <div className='stats-container'>
      <div className='glass-container'>
        <span>Croquettes</span>
        <div className='elipse'>
          <ReviewsBar score={reviewScore} />
        </div>
      </div>
    </div>
  );
}

export default StatsLayout;
