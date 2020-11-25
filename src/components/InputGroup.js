import React from 'react'
import { Field } from 'formik'

const InputGroup = props => {
  const { name, label, inputType, error, touched, placeholder } = props

  const handleKeyDown = evt => {
    if (evt.key === 'e') evt.preventDefault()
  }

  return (
    <div className='form-group'>
      <div className='d-flex flex-row'>
        <label htmlFor={name}>{label}</label>
        {error && touched ? (
          <small className='ml-auto form-text text-danger'>{error}</small>
        ) : null}
      </div>
      <Field
        type={inputType}
        name={name}
        className='form-control form-control-sm'
        onKeyDown={inputType === 'number' ? evt => handleKeyDown(evt) : null}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputGroup
