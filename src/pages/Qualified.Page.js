import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const QualifiedPage = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().email().required('Required'),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
        'Must contain at least 1 number and 1 symbol'
      )
      .required('Required')
      .min(8, 'Must contain at least 8 characters'),
    verify: Yup.string()
      .required('Required')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  return (
    <div className='container mt-5 pt-5'>
      <h1 className='mb-4'>You Qualified!</h1>
      <div className='p-4 bg-light rounded' style={{ maxWidth: 440 }}>
        <h2 className='h4 mb-4'>Create An Account</h2>

        <Formik
          initialValues={{
            username: '',
            password: '',
            verify: '',
          }}
          onSubmit={values => {
            console.log({ values });
            alert('Account successfully created!');
          }}
          validationSchema={validationSchema}>
          {({ errors, touched }) => (
            <Form>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <Field
                  type='text'
                  name='username'
                  className='form-control'
                  placeholder='Input a valid email'
                />
                {errors.username && touched.username && (
                  <div className='text-danger'>{errors.username}</div>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <Field
                  type='password'
                  name='password'
                  className='form-control'
                />
                {errors.password && touched.password && (
                  <div className='text-danger'>{errors.password}</div>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='verify'>Verify Password</label>
                <Field type='password' name='verify' className='form-control' />
                {errors.verify && touched.verify && (
                  <div className='text-danger'>{errors.verify}</div>
                )}
              </div>

              <div className='mt-4 d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary px-4'>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default QualifiedPage;
