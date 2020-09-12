import React from 'react'

const LongAnswer = ({question, id, onChange, isRequired}) => {

  const handleChange = (event) => {
    onChange(id, event.target.value)
  }

  return (
    <div>
      <h3>{question}</h3>
      <textarea required={isRequired} onChange={handleChange} />
    </div>
  );
}

export default LongAnswer;