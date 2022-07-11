import React from 'react';
import { MemoryRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1> Hello World</h1>
      {/* NavBar Section */}
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='logo'>
                <img src='..//web/images/logo.png' alt='' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='items'>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Products</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='icons'>
                <img src='..//web/images/icon2.png' alt='' />
                <img src='..//web/images/icon1.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Banner */}
      <div className='bg-img'>
        <img src='..//web/images/bg-image.png' alt='' />
        <div className='centered-A'>
          <p>About Us</p>
        </div>
      </div>
      {/* Abous Us */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='text'>
                <h6>
                  <b>About Us</b>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in
                  <br />
                  culpa qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='about-image'>
                <img src='..//web/images/about-img.png' alt='' />
              </div>
            </div>
            <div className='col-md-3'>
              <div className='about-img2'>
                <img src='..//web/images/about-img2.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Boxes */}
      <div className='container'>
        <div className='rows'>
          <div className='col-md-4'>
            <div className='boxes1'>
              <ul>
                <li>
                  <img src='..//web/images/about1-img.png' alt='' />
                </li>
                <li>
                  <h3>Free Shipping</h3>
                </li>
                <li>
                  <p>Sign Up for updates and get free Shipping</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='boxes2'>
              <ul>
                <li>
                  <img src='..//web/images/about2-img.png' />
                </li>
                <li>
                  <h3>30 Mintues Delivary</h3>
                </li>
                <li>
                  <p>
                    Everything you order will be quickly delivered to your door
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='boxes3'>
              <ul>
                <li>
                  <img src='..//web/images/about3-img.png' />{' '}
                </li>
                <li>
                  <h3>Best Quality Garantee</h3>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet
                    <br /> consectetur.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <section className='footer'>
        <div className='container'>
          <hr />
          <div className='footer-txt'>
            <p>@2022 Domain. All Right Reserved.</p>
          </div>
          <div className='nav-footer'>
            <div className='rows'>
              <div className='col-md-12'>
                <div className='items-f'>
                  <ul>
                    <li>
                      <a href='#' />
                      Home
                    </li>
                    <li>
                      <a href='#' />
                      About
                    </li>
                    <li>
                      <a href='#' />
                      Products
                    </li>
                    <li>
                      <a href='#' />
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='font-icon'>
              <div className='rows'>
                <div className='col-md-4'>
                  <i className='fa-brands fa-facebook' />
                </div>
                <div className='col-md-4'>
                  <i className='fa-brands fa-twitter' />
                </div>
                <div className='col-md-4'>
                  <i className='fa-brands fa-linkedin' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
