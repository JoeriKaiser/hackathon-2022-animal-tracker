import React from 'react';

function Bar({ donnee }) {
  return (
    <>
      <div style={{ height: `${donnee}%` }} className='bar'></div>
    </>
  );
}

export default Bar;
