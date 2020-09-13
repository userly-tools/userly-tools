import React from 'react'
import { Input } from 'reactstrap';

const LongAnswer = ({question, id, onChange, isRequired}) => {

  const handleChange = (event) => {
    onChange(id, event.target.value)
  }

  return (
    <div className="text-left rounded my-3 p-3" style={{border: "1px dashed rgb(93, 44, 255, 0.5)"}}>
      <h5>Q. {question}</h5>
      <Input type="textarea" placeholder="Your answer here" required={isRequired} onChange={handleChange} />
    </div>
  );
}

export default LongAnswer;