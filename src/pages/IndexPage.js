import React from 'react';
import Newsletter from '../componenets/Newsletter';

const IndexPage = () => {
  return (
    <div>
      {/* Banner */}
      <section className='section1'>
        <div className='bg-img'>
          <img src={require('../images/bg-image.png')} alt='image' />
          <div className='centered'>
            <p>
              Your Jewelry Is
              <br />
              Our Passion
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='text'>
                <h6>
                  <b>About Us</b>
                </h6>
                <h1>
                  <strong>Where Class</strong>
                </h1>
                <h1>
                  <strong>Meets Glamour</strong>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  {' '}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem.ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam. eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='about-image'>
                <img src={require('../images/about-img.png')} alt='' />
              </div>
            </div>
            <div className='col-md-3'>
              <div className='about-img2'>
                <img src={require('../images/about-img2.png')} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section */}
      <section className='product'>
        <div className='product-text'>
          <h6>Product</h6>
          <h1 className='text-center'>Our Product</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            porro, soluta perferendis quam tempora dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti!
          </p>
          <div className='row'>
            <div className='col-md-3'>
              <div className='product-img1'>
                <img src={require('../images/product1.png')} alt='' />
                <p>
                  Your Heading Here!
                  <br />
                  Your Heading Here!
                </p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='product-img2'>
                <img src={require('../images/product2.png')} alt='' />
                <p>Your Heading Here!</p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='product-img3'>
                <img src={require('../images/product3.png')} alt='' />
                <p>Your Heading Here!</p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='product-img4'>
                <img src={require('../images/product4.png')} alt='' />
                <p>Your Heading Here!</p>
                <button>Veiw All</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section>
        <div className='container'>
          <div className='cat-text'>
            <h6 className='text-center'>Categories</h6>
            <h1 className='text-center'>Product By Categories</h1>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='cat-img'>
                <img src={require('../images/cat1.png')} alt='' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='cat-img1'>
                <img src={require('../images/cat2.png')} alt='' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='cat-img2'>
                <img src={require('../images/cat3.png')} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    <Newsletter/>
      
      {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
      {/* Include all compiled plugins (below), or include individual files as needed */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
    </div>
  );
};

export default IndexPage;
