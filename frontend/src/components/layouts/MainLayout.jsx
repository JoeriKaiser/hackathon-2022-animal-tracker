import React from 'react';

function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <header>
        <img src='' alt='' />
      </header>
      {children}
    </>
  );
}

export default MainLayout;
