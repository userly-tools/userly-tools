import React from 'react'

const LongAnswer = ({question, index, onChange}) => {

  const handleChange = (event) => {
    onChange(index, event.target.value)
  }

  return (
    <div>
      <h3>{question}</h3>
      <textarea onChange={handleChange} />
    </div>
  );
}

export default LongAnswer;