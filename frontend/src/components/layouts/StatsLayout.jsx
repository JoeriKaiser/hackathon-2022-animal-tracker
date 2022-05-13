import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../assets/context/AnimalContext';
import chart from '../../assets/img/Chart-11.png';
import ReviewsBar from '../common/ReviewsBar';

function StatsLayout() {
  const animalContext = useContext(GlobalContext);
  const [animalsArray] = animalContext.animal;
  const [statusArray] = animalContext.status;
  const animalUUID = animalsArray.uuid;
  const statusUUID = statusArray.uuid;
  const statusData = statusArray.datas;
  const [reviewScore, setReviewScore] = useState(10);

  const convertDataToPercentage = (y, x) => {
    return ((x - y) / x) * 100;
  };
  console.log(convertDataToPercentage(12, 16));
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
