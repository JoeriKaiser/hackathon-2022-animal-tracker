import React from 'react';
import Logo from '../common/Logo';

function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <header>
        <Logo></Logo>
      </header>
      {children}
    </>
  );
}

export default MainLayout;
