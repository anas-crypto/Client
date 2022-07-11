import React from 'react';
import '../componenets/css/contactForm_animate.css';
import '../componenets/css/contactForm_media.css';
import '../componenets/css/contactForm_media.css';
import Contact from '../componenets/Contact';

const ContactUs = () => {
  return (
    <section className='ftco-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Contact Form #09</h2>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-10 col-md-12'>
            <div className='wrapper'>
              <div className='row justify-content-center'>
                <div className='col-lg-8 mb-5'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='dbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                          <span className='fa fa-map-marker'></span>
                        </div>
                        <div className='text'>
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='dbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                          <span className='fa fa-phone'></span>
                        </div>
                        <div className='text'>
                          <p>
                            <span>Phone:</span>{' '}
                            <a href='tel://1234567920'>+ 1235 2355 98</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='dbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                          <span className='fa fa-paper-plane'></span>
                        </div>
                        <div className='text'>
                          <p>
                            <span>Email:</span>{' '}
                            <a href='mailto:info@yoursite.com'>
                              info@yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ----------------------------------- */}
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
