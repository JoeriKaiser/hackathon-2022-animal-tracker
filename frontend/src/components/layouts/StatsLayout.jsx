import React from 'react';
import chart from '../../assets/img/Chart-11.png';

function StatsLayout() {
  return (
    <div className='stats-container'>
      <div className='glass-container'>
        <img id='chart' src={chart} alt='' />
      </div>
    </div>
  );
}

export default StatsLayout;
