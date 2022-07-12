import React from 'react'

const Newsletter = () => {
  return (
    <div>
        {/* Subscribe Our Newsletter */}
        <section>
        <div className='container'>
          <h1 className='S-txt'>Subscribe Our Newsletter</h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            tempore!
          </p>
          <p className='text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='input'>
            <input type='text' placeholder='Please enter your email address' />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
