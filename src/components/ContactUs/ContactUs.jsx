import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='container-fluid page-spacing-top page-spacing-bottom'>
            <div className='row'>
              <div className='col-12 contact-spacing text-center'>
                <h3>We'd love to hear from you!</h3>
                <p className='para-body'>
                  Whether you have a question, an inquiry or a suggestion,
                  please feel free to get in touch right away!
                </p>
              </div>
            </div>
            <hr className='theme-line' />
            <div className='row'>
              <div className='col-12 contact-spacing'>
                <h4 className='text-border'>Registered Address</h4>
                <p className='para-body'>
                  A5-003, Westernhills Phase - 1, Baner-Sus, Pune, Maharashtra,
                  India - 411021
                </p>
              </div>
            </div>
            <hr className='theme-line' />
            <div className='row'>
              <div className='col-12 contact-spacing'>
                <h4 className='text-border'>Contact Details</h4>
                <div className='container-fluid contact-details'>
                  <div className='row'>
                    <div className='col-md-4 font-bold'>
                      Phone:
                      <br /> +91 70200 08480
                    </div>
                    <div className='col-md-4 font-bold'>
                      Alternate:
                      <br /> +973 3934 5908
                    </div>
                    <div className='col-md-4 font-bold'>
                      Email: himanshu@ggroupexim.in
                    </div>
                  </div>
                </div>
                <p className='para-body'>
                  Please feel free to get intouch on <span className='font-bold'>Whatsapp</span>, on any of the
                  above numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
