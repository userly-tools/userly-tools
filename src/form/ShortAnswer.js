import React from 'react'

const ShortAnswer = ({question, id, onChange, isRequired}) => {

  const handleChange = (event) => {
    onChange(id, event.target.value)
  }

  return (
    <div>
      <h3>{question}</h3>
      <input type="text" required={isRequired} onChange={handleChange} />
    </div>
  );
}

export default ShortAnswer;