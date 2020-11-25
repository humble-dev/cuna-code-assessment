import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import InputGroup from './InputGroup'

const applicationSchema = Yup.object().shape({
  purchasePrice: Yup.number().required('Required'),
  autoMake: Yup.string().required('Required'),
  autoModel: Yup.string().required('Required'),
  yearlyIncome: Yup.number().required('Required'),
  creditScore: Yup.number()
    .min(300, 'Score must be between 300 and 850')
    .max(850, 'Score must be between 300 and 850')
    .required('Required'),
})

const LoanForm = () => {
  return (
    <Formik
      initialValues={{
        purchasePrice: '',
        autoMake: '',
        autoModel: '',
        yearlyIncome: '',
        creditScore: '',
      }}
      validationSchema={applicationSchema}
      validateOnBlur
      onSubmit={values => {
        console.log(values)
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
            <div className='col-md-5'>
              <InputGroup
                name='yearlyIncome'
                label='Yearly Income'
                error={errors.yearlyIncome}
                touched={touched.yearlyIncome}
                inputType={'number'}
              />
            </div>
            <div className='col-md-7'>
              <InputGroup
                name='creditScore'
                label='Estmated Credit Score'
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
  )
}

export default LoanForm
