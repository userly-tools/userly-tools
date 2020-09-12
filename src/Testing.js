import React, { useEffect, useState } from 'react'
import FormTypeSelector from './form/FormTypeSelector';

const formJson = {
  id: "unique_id",
	name: "form_name",
	user_id: "abc",
	components: [
    {
      type: "short_ans",
      question: "Short Answer",
    }, {
      type: "long_ans",
      question: "Long Answer",
    }, 
  ]
}

const Testing = () => {

  const [answers, setAnswers] = useState({});
  
  useEffect(()=> {
    console.log(answers)
  }, [answers])

  const handleChange = (index, value) => {
    setAnswers({...answers, [index]: value})
  }

  return (
    <>
      {formJson.components.map((data, index) => (
        <FormTypeSelector key={index} data={{...data, index, handleChange}} />
      ))}
    </>
  );
}

export default Testing;