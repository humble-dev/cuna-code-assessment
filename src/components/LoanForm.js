import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputGroup from './InputGroup';

const applicationSchema = Yup.object().shape({
  purchasePrice: Yup.string().required('Required'),
  autoMake: Yup.string().required('Required'),
  autoModel: Yup.string().required('Required'),
  yearlyIncome: Yup.number().required('Required'),
  creditScore: Yup.number()
    .min(300, 'Must be between 300 and 850')
    .max(850, 'Must be between 300 and 850')
    .required('Required'),
});

const LoanForm = () => {
  // Example POST method implementation:
  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  const handleSubmit = async values => {
    postData(cloud, values)
      .then(r => r.json().then(data => ({ status: r.status, body: data })))
      .then(({ status, body }) => {
        if (status === 200) {
          body.qualified
            ? console.log('To qualified')
            : console.log('To disqual');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Formik
      initialValues={{
        purchasePrice: '12000',
        autoMake: 'kia',
        autoModel: 'soul',
        yearlyIncome: '50000',
        creditScore: '680',
      }}
      validationSchema={applicationSchema}
      onSubmit={values => {
        handleSubmit(values);
      }}>
      {({ errors, touched }) => (
        <Form>
          <InputGroup
            name='purchasePrice'
            label='Auto Purchase Price'
            error={errors.purchasePrice}
            touched={touched.purchasePrice}
            inputType={'number'}
          />

          <div className='row'>
            <div className='col-md-6'>
              <InputGroup
                name='autoMake'
                label='Make'
                error={errors.autoMake}
                touched={touched.autoMake}
                inputType={'text'}
              />
            </div>
            <div className='col-md-6'>
              <InputGroup
                name='autoModel'
                label='Model'
                error={errors.autoModel}
                touched={touched.autoModel}
                inputType={'text'}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <InputGroup
                name='yearlyIncome'
                label='Yearly Income'
                error={errors.yearlyIncome}
                touched={touched.yearlyIncome}
                inputType={'number'}
              />
            </div>
            <div className='col-md-6'>
              <InputGroup
                name='creditScore'
                label='Credit Score'
                error={errors.creditScore}
                touched={touched.creditScore}
                inputType={'number'}
                placeholder='Between 350 and 800'
              />
            </div>
          </div>

          <div className='mt-3 mb-5'>
            <button type='submit' className='btn btn-primary px-4'>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoanForm;
