import React from 'react'

const Footer = () => {
  return (
    <div>
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
                    <a href='/'>Home</a>
                    </li>
                    <li>
                    <a href='/about-us'>AboutUs</a>
                    </li>
                    <li>
                    <a href='/products'>Products</a>
                    </li>
                    <li>
                    <a href='/contact-us'>Contact Us</a>
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
  )
}

export default Footer
