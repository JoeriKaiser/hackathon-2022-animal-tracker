import React from 'react';
import catProfile from '../../assets/img/ChatProfile.png';
import upload from '../../assets/img/upload-alt.png';

function AnimalImage() {
  return (
    <div className='profile-picture-container'>
      <img id='main-img' src={catProfile} alt='' />
      <button id='upload-button' type='button'>
        <img id='upload' src={upload} alt='upload button' />
      </button>
    </div>
  );
}

export default AnimalImage;
