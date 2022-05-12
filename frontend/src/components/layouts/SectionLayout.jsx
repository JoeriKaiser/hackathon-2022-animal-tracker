import React, { useContext } from 'react';
import AnimalContext from '../../assets/context/AnimalContext';
import CatImage from '../common/AnimalImage';

function SectionLayout() {
  // const { animalsArray } = useContext(AnimalContext);
  // const nom = animalsArray.nom;
  // console.log(nom);
  return (
    <div className='section-container'>
      <CatImage />
      <h2>jj</h2>
    </div>
  );
}

export default SectionLayout;
