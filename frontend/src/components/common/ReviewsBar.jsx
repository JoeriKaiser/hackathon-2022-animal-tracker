import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './elipse.css';

const ReviewsBar = (props) => {
  const { score } = props;
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    return 'hs1(' + c + ', 100%, 50%)';
  };
  return (
    <CircularProgressbar
      value={score}
      text={`${score} %`}
      label="a"
      circleRatio={0.8}
      styles={{
        trail: {
          strokeLinecap: 'butt',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
        },
        path: {
          strokeLinecap: 'butt',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
          stroke: calcColor(score, 0, 120),
        },
        text: {
          fill: '#8884FF',
        },
      }}
      strokeWidth={10}
    />
  );
};

export default ReviewsBar;
