import React, { useEffect, useState } from 'react'
import { Button, Container, Input, Label } from 'reactstrap';
import CustomNavbar from '../components/CustomNavbar';
import FormTypeSelector from '../form/FormTypeSelector';

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


  const formId = window.location.href.split("/").pop();

  useEffect(() => {
    console.log(formId)
  }, [formId]);
  
  const [answers, setAnswers] = useState({});
  const [fill, setFill] = useState({name: "", email: "", phone: ""});
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log(answers, fill)
  }

  const handleChange = (index, value) => {
    setAnswers({...answers, [index]: value})
  }
  
  const handleFill = (event) => {
    setFill({...fill, [event.target.name]: event.target.value})
  }

  return (
    <>
    <CustomNavbar colorV="white" navC="white" />
    <Container fluid className="px-0 pb-4" style={{background: "white"}}>
      <div className="px-0 px-md-5 mx-3 text-center"> 
      <h3 className="text-primary head">FILL THE SURVEY</h3>
      <Container className="text-left">
        <form onSubmit={submitForm}>
          <Label className="mb-0 small">Full Name</Label>
          <Input type="text" name="name"  required  placeholder="Full Name" className="mb-3" onChange={handleFill} value={fill.name} />
          <Label className="mb-0 small">Email</Label>
          <Input type="email" name="email"  required  placeholder="Email" className="mb-3" onChange={handleFill} value={fill.email} />
          <Label className="mb-0 small">Phone No.</Label>
          <Input type="tel" name="phone"  required placeholder="Phone Number"  className="mb-3" onChange={handleFill} value={fill.phone} />
          {formJson.components.map((data, index) => (
            <FormTypeSelector key={index} data={{...data, handleChange}} />
          ))}
          <div  className="text-center">
        <Button color="primary" className="mt-3" outline size="lg" type="submit">Submit</Button>
        </div>
        </form>
      </Container>
      </div>
    </Container>
    </>
  );

}

export default ViewFormTesting;