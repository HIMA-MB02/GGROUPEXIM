import React from 'react';

// arrayOfImages => [{ src, tag, description, alt }]
const Carousel = ({ arrayOfImages }) => {
  const mapCarouselInner = () => {
    return arrayOfImages.map((img) => (
      <div class='carousel-item'>
        <img src={img.src} alt='Los Angeles' style={{ width: '100%' }} />
      </div>
    ));
  };
    const mapCarouselIndicators = () => {
      return arrayOfImages.map((img, index) => (
        <li data-target='#myCarousel' data-slide-to={(parseInt(index, 10) + 1).toString()}></li>
      ));
    };
  return (
    <div id='myCarousel' class='carousel slide double-border' data-ride='carousel'>
      <ol class='carousel-indicators'>
        <li data-target='#myCarousel' data-slide-to='0' class='active'></li>
        {mapCarouselIndicators()}
      </ol>

      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <img
            src='https://www.w3schools.com/bootstrap/chicago.jpg'
            alt='Chicago'
            style={{ width: '100%' }}
          />
        </div>
        {mapCarouselInner()}
      </div>

      <a class='left carousel-control' href='#myCarousel' data-slide='prev'>
        <span class='glyphicon glyphicon-chevron-left'></span>
        <span class='sr-only'>Previous</span>
      </a>
      <a class='right carousel-control' href='#myCarousel' data-slide='next'>
        <span class='glyphicon glyphicon-chevron-right'></span>
        <span class='sr-only'>Next</span>
      </a>
    </div>
  );
};

export default Carousel;
