import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <>
      {/* NavBar Section */}
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='logo'></div>
            </div>
            <div className='col-md-6'>
              <div className='items'>
                <ul>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/about-us'>AboutUs</a>
                  </li>
                  <li>
                    <a href='/contact-us'>Contact Us</a>
                  </li>
                  <li>
                    <a href='/products'>Products</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='icons'>
                <img src={require('../images/icon2.png')}></img>
                <img src={require('../images/icon1.png')} alt='' />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default nav;
