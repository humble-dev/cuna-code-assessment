import React from 'react'

import LoanForm from '../components/LoanForm'

const LoanFormPage = () => {
  return (
    <div style={{ height: '100vh' }} className='pt-5'>
      <div className='container'>
        <div className='jumbotron pb-5 bg-primary'>
          <div className='mx-auto px-md-5'>
            <h1 className='h2 mb-3 text-white'>Qualify for a loan</h1>
            <p className='lead text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, omnis sapiente cupiditate ad assumenda, libero
              consequatur ex labore sunt corrupti nesciunt incidunt. Voluptatum,
              ratione?
            </p>
          </div>
        </div>
        <div className='mx-auto' style={{ maxWidth: 650 }}>
          <LoanForm />
        </div>
      </div>
    </div>
  )
}

export default LoanFormPage
