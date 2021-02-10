import React from 'react';
import carouselImages from '../../constants/images-carousel';
import Carousel from '../Carousel/Carousel';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='container page-spacing-top page-spacing-bottom'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 carousel-div'>
          <Carousel arrayOfImages={carouselImages} />
        </div>
      </div>
      <hr className='theme-line seperator-padding' />
      <div className='row'>
        <div className='col-md-8 offset-md-2 text-center'>
          <h3 className='heading-text'>More Coming Soon!</h3>
          <div>
            <img
              className='coming-soon'
              src='https://www.w3schools.com/bootstrap/chicago.jpg'
              alt='Customer_A'
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
