import React, { useState, useContext, useEffect } from 'react';
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
  const [reviewScore, setReviewScore] = useState(0);

  const convertDataToPercentage = (x) => {
    if (x === undefined) {
      return 0;
    }
    return Math.abs(Math.ceil(-7.1428 * x + 114.28)); // dedicacee à Christel
  };
  console.log('Ma donnee', statusData);
  const donnee = convertDataToPercentage(statusData);
  console.log('Ma donnee 2', donnee);

  useEffect(() => {
    const donnee = convertDataToPercentage(statusData);

    setReviewScore(donnee);
  }, [reviewScore, donnee]);
  
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
