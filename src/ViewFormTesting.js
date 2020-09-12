import React, { useEffect, useState } from 'react'
import FormTypeSelector from './form/FormTypeSelector';

const formJson = {
  id: "unique_id",
	name: "form_name",
	user_id: "abc",
	components: [
    {
      id: 1,
      type: "short_ans",
      question: "Short Answer",
    }, {
      id: 0,
      type: "long_ans",
      question: "Long Answer",
      isRequired: 1
    }, {
      id: 2,
      type: "checkbox",
      question: "Multi Checkbox",
      options: [
        "Hello", 
        "World",
        "Multi",
        "Select"
      ]
    }, 
  ]
}

const ViewFormTesting = () => {

  const [answers, setAnswers] = useState({});
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log(answers)
  }

  const handleChange = (index, value) => {
    setAnswers({...answers, [index]: value})
  }

  return (
    <form onSubmit={submitForm}>
      {formJson.components.map((data, index) => (
        <FormTypeSelector key={index} data={{...data, handleChange}} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ViewFormTesting;