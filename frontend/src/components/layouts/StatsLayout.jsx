import React from 'react';
import { useState } from 'react';
import chart from '../../assets/img/Chart-11.png';
import ReviewsBar from '../common/ReviewsBar';

function StatsLayout() {
  const [reviewScore, setReviewScore] = useState(10);
  return (
    <div className='stats-container'>
      <div className='glass-container'>
        <span>Croquettes</span>
        {/* <img id='chart' src={chart} alt='' /> */}
        <div className='elipse'>
          <ReviewsBar score={reviewScore} />
        </div>
      </div>
    </div>
  );
}

export default StatsLayout;
