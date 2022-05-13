import React from 'react';
import { useState } from 'react';
import ReviewsBar from '../common/ReviewsBar';

function StatsLayout() {
  const [reviewScore, setReviewScore] = useState(10);
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
