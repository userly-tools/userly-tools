import React from 'react'
import LongAnswer from './LongAnswer';
import ShortAnswer from './ShortAnswer'

const renderSwitch = (param, data) => {
  const {
    question,
    index,
    handleChange,
    options
  } = data
  switch(param)
  {
    case 'short_ans':
      return <ShortAnswer question={question} index={index} onChange={handleChange} />
    case 'long_ans':
      return <LongAnswer question={question} index={index} onChange={handleChange} />
    default:
      return
  }
}

const NewFormType = ({data}) => {

  return (
    <div>
      {data.name}
    </div>
  );
}

export default NewFormType;