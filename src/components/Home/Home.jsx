import React from 'react';
import TypingEffect from '../../utils/typing-effect';
import BubbleButtons from '../BubbleButtons/BubbleButtons';
import './Home.css';

const Home = () => {
  const typingEffectDivRef = React.useRef(null);

  React.useEffect(() => {
    //do some task
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TypingEffect(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `.txt-rotate > .wrap { border-right: 0.1em solid var(--secondary-highlight); text-shadow: 1px 0 0 var(--secondary-highlight), -1px 0 0 var(--secondary-highlight), 0 1px 0 var(--secondary-highlight), 0 -1px 0 var(--secondary-highlight), 1px 1px var(--secondary-highlight), -1px -1px 0 var(--secondary-highlight), 1px -1px 0 var(--secondary-highlight), -1px 1px 0 var(--secondary-highlight); }`;
    document.body.appendChild(css);
  }, [typingEffectDivRef]);

  return (
    <div className='container products-imgs' id='home'>
         <div className='row'>
        <div className='col-xs-12 col-md-8 offset-md-2 text-center company-name'>
            <h1>An <span className='text-border'>Ex</span>port <span className='text-border'>Im</span>port Company</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-md-6 offset-md-3 text-center typing-text'>
          <h3>
            We are{' '}
            <span
              ref={typingEffectDivRef}
              class='txt-rotate'
              data-period='2000'
              data-rotate='[ "in love with the coco", "young & bold", "manufacturers of tomorrow", "traders of today" ]'
            ></span>
            {'.'}
          </h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-md-6 text-right mobile-centerize button-parent'>
          <img
            className='landing-page-block'
            src={process.env.PUBLIC_URL + '/static_content/block.png'}
            alt='company_logo'
          />
          <BubbleButtons bottom={0} right={0}>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-left'>
                  <h3 className='font-bold'>Coir Pith/ Coco Peat Blocks</h3>
                  <p className='font-light'>
                    These are <b>5KG</b> blocks.
                    <br />
                    Made from the husk of the coconut, these are mainly used in
                    Lanscaping, Large Nurseries, Horticulture, as Animal Bedding
                    and also in some cases as Industrial Oil Absorbents
                    <br />
                    <span className='font-bold'>
                      DIMENSIONS: 30 c.m. X 30 c.m. X 12 c.m.
                      <br />
                      E.C.: LOW OR HIGH E.C.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </BubbleButtons>
        </div>
        <div className='col-xs-12 col-sm-6 text-left mobile-centerize button-parent'>
          <img
            className='landing-page-brick'
            src={process.env.PUBLIC_URL + '/static_content/brick.png'}
            alt='company_logo'
          />
          <img
            className='landing-page-brick'
            src={process.env.PUBLIC_URL + '/static_content/brick.png'}
            alt='company_logo'
          />
          <BubbleButtons top={20} left={0}>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-left'>
                  <h3 className='font-bold'>Coir Pith/ Coco Peat Bricks</h3>
                  <p className='font-light'>
                    These are <b>650GMs</b> blocks.
                    <br />
                    Made from the husk of the coconut, these are mainly used by
                    end customers, for their personal gardens, flower pots,
                    potting mixes, etc.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </BubbleButtons>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 offset-xs-0 offset-md-3 col-md-6 text-center mobile-centerize button-parent'>
          <img
            className='landing-page-slab'
            src={process.env.PUBLIC_URL + '/static_content/slab.png'}
            alt='company_logo'
          />
          <BubbleButtons bottom={0} left={0}>
            Hey There!
          </BubbleButtons>
        </div>
      </div>
      <script src='%PUBLIC_URL%/inhouse-js/typing-effect.js'></script>
    </div>
  );
};

export default Home;
