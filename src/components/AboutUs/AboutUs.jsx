import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='page-spacing-top page-spacing-bottom container'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='para-section'>
            <h3 className='para-heading'>Who we are?</h3>
            <p className='para-body'>
              We are Coir Pith/Cocopeat traders &amp; manufacturers, based in
              India with a strong domestic presence in Northern Maharashtra and
              Karnataka. We supply to various nurseries, landscape contractors
              and horticulturists in the country with the aim to provide the
              best possible product, at a very competitive rate. We have
              recently supplied to Almoayyed Landscape and Pools in Bahrain,
              with an order quantity of 125 MT.We are looking to expand our
              operations, with an aspiration to be one of the top exporters of
              Coir Pith from India.
            </p>
          </div>
          <hr className='theme-line' />
          <div className='para-section'>
            <h3 className='para-heading'>How did we start?</h3>
            <p className='para-body'>
              We started in the year 2019, with our domestic operations of
              supplying HIGH E.C. Coir Pth Blocks, to the local nurseries in and
              around Pune. We come from a background of generations of
              farmers/land owners, with rich experience in the agriculture.{' '}
              <br />
              We are relatively new in the Coir Industry, but we have a fresh
              outlook with a strong and organised apprach to everything that we
              do. Our results and the quality of our product speaks for itself,
              and we aim to satisfy our customers with the best service in the
              industry.
            </p>
          </div>
          <hr className='theme-line' />
          <div className='para-section'>
            <h3 className='para-heading'>Founders</h3>
            <br />
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-6 text-center'>
                  <img
                    className='team-picture'
                    src={
                      process.env.PUBLIC_URL +
                      '/static_content/team/himanshu_pp.jpeg'
                    }
                    alt='himanshu_pp'
                  />
                  <h5>Himanshu Ganapavarapu</h5>
                  <h6>Managing Director</h6>
                  <h6>himanshu@ggroupexim.in</h6>
                </div>
                <div className='col-md-6 text-center'>
                  <img
                    className='team-picture'
                    src={
                      process.env.PUBLIC_URL + '/static_content/team/venkat_pp.jpeg'
                    }
                    alt='himanshu_pp'
                  />
                  <h5>Venkataraman Ganapavarapu</h5>
                  <h6>Vice President, Finance</h6>
                  <h6>venkat@ggrouexim.in</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
