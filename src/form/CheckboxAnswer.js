import React, { useState } from 'react'
import { Input } from 'reactstrap'

const CheckboxAnswer = ({question, id, onChange, options}) => {

  const [values, setValues] = useState(new Array(options.length).fill(false))

  const handleChange = (event) => {
    let bValues = [...values]
    bValues[event.target.name] = !bValues[event.target.name] 
    setValues(bValues)
    onChange(id, bValues)
  }

  return (
    <div className="text-left rounded my-3 p-3" style={{border: "1px dashed rgb(93, 44, 255, 0.5)"}}>
      <h5>Q. {question}</h5>
      {options.map((name, index) => (
        <div className="my-1 pl-4" key={index}>
          <Input type="checkbox" name={index} checked={values[index]} onChange={handleChange} /> {name}
        </div>
      ))}
    </div>
  );
}

export default CheckboxAnswer;