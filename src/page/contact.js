import React from 'react';
import { useFormik } from 'formik';

const Contact = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.yourName) {
      errors.yourName = '*Required';
    }
    if (!values.email) {
      errors.email = '*Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      yourName: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className=' box-border  font-sans bg-white mt-10 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5 mb-11'>
        <div className='font-bold text-2xl  lg:text-4xl pb-5'>CONTACT US</div>
        <hr />
        <br></br>
        <form  className='grid' method='POST' action='https://formsubmit.co/eeaefa62ac7fcd28aa1ac7258742541e'>
          <label htmlFor='yourName' className='flex'>
            Your Name{' '}
            {formik.errors.yourName ? (
              <div className='text-red-600  pl-2'>{formik.errors.yourName}</div>
            ) : null}
          </label>
          <input
            className=' p-2 w-3/4 mb-9  bg-[#e4e5e6]'
            id='yourName'
            name='yourName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.yourName}
          />

          <label htmlFor='email' className='flex'>
            Email Address{' '}
            {formik.errors.email ? (
              <div className='text-red-600 pl-2'>{formik.errors.email}</div>
            ) : null}
          </label>
          <input
            className=' p-2 w-3/4 mb-9  bg-[#e4e5e6]'
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label>Message</label>
          <textarea
            className=' p-2 mb-9  bg-[#e4e5e6]'
            name='message'
            id='message'
            cols='50'
            rows='4'
          ></textarea>
          <button
            type='submit'
            className='bg-cyan-400 w-32 rounded h-12 mx-auto border-2 hover:bg-red-600
          '
          >
            Submit
          </button>
        </form>
      </div>
      <div className=' font-sans bg-white mt-8 mx-5 rounded pt-5 pl-4 pb-4 lg:w-[70%] lg:ml-16  pr-5 mb-11'></div>
    </div>
  );
};

export default Contact;
