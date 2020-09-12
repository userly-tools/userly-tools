import React, { useState } from 'react'

const CheckboxAnswer = ({question, id, onChange, options}) => {

  const [values, setValues] = useState(new Array(options.length).fill(false))

  const handleChange = (event) => {
    let bValues = [...values]
    bValues[event.target.name] = !bValues[event.target.name] 
    setValues(bValues)
    onChange(id, bValues)
  }

  return (
    <div>
      <h3>{question}</h3>
      {options.map((name, index) => (
        <div key={index}>
          <input type="checkbox" name={index} checked={values[index]} onChange={handleChange} /> {name}
        </div>
      ))}
    </div>
  );
}

export default CheckboxAnswer;