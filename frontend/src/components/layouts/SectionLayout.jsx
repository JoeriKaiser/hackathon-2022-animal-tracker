import React, { useContext } from 'react';
import { GlobalContext } from '../../assets/context/AnimalContext';
import CatImage from '../common/AnimalImage';

function SectionLayout() {
  const animalContext = useContext(GlobalContext);
  const [animalsArray] = animalContext.animal;
  const nom = animalsArray.nom;
  return (
    <div className='section-container'>
      <CatImage />
      <h2>{nom}</h2>
    </div>
  );
}

export default SectionLayout;
