import React from 'react';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

const Contact = () => {
  const handleSubmit = (e, values) => {
    e.preventDefault();
    alert('CLicked');

    console.log(values);
  };

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    // validationSchema: validationSchema,
  });
  return (
    <div className='col-lg-8'>
      <div className='contact-wrap'>
        <h3 className='mb-4 text-center'>Get in touch with us</h3>
        <div id='form-message-warning' className='mb-4 w-100 text-center'>
          <div id='form-message-success' className='mb-4 w-100 text-center'>
            Your message was sent, thank you!
          </div>
          <form
            // id='contactForm'
            // name='contactForm'
            className='contactForm'
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='name'
                    id='name'
                    placeholder='Name'
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    placeholder='Email'
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    className='form-control'
                    id='message'
                    cols='{30}'
                    rows='{8}'
                    placeholder='Message'
                    onChange={formik.handleChange}
                  />
                </div>
                <div class='col-md-12'>
                  <div class='form-group'>
                    <input
                      type='submit'
                      value='Send Message'
                      class='btn btn-primary'
                    />
                    <div class='submitting'></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
