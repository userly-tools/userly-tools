import React from 'react'
import LongAnswer from './LongAnswer';
import ShortAnswer from './ShortAnswer'
import CheckboxAnswer from './CheckboxAnswer'

const renderSwitch = (param, data) => {
  const {
    question,
    handleChange,
    options,
    isRequired,
    id
  } = data
  switch(param)
  {
    case 'short_ans':
      return <ShortAnswer id={id} question={question} isRequired={isRequired} onChange={handleChange} />
    case 'long_ans':
      return <LongAnswer id={id} question={question} isRequired={isRequired} onChange={handleChange} />
    case 'checkbox':
      return <CheckboxAnswer id={id} question={question} options={options} onChange={handleChange} />
    default:
      return
  }
}

const FormTypeSelector = ({data}) => {

  return (
    <>
      {renderSwitch(data.type, data)}
    </>
  );
}

export default FormTypeSelector;