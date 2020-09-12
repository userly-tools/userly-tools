import React from 'react'

const ShortAnswer = ({question, index, onChange}) => {

  const handleChange = (event) => {
    onChange(index, event.target.value)
  }

  return (
    <div>
      <h3>{question}</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default ShortAnswer;