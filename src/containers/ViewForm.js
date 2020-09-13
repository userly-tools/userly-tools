import React, { useEffect, useState } from 'react'
import { Button, Container, Input, Label } from 'reactstrap';
import CustomNavbar from '../components/CustomNavbar';
import FormTypeSelector from '../form/FormTypeSelector';
import axios from 'axios'

const ViewForm = () => {


  const [formData, setFormData] = useState({components: []})
  const [errorID, setErrorId] = useState(false)

  const formId = window.location.href.split("/").pop();

  useEffect(() => {
    const headers = {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    };
    axios.get(`https://userly.herokuapp.com/form_components/${formId}`, headers)
    .then(res => {
      setFormData(JSON.parse(JSON.stringify({components: res.data})));
      setErrorId(false);
    }).catch(err => {
      setFormData({})
      setErrorId(true)
    })
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
      {errorID && <p>INVALID LINK!</p>} 
      {!errorID && <>
      <h3 className="text-primary head">FILL THE SURVEY</h3>
      <Container className="text-left">
        <form onSubmit={submitForm}>
          <Label className="mb-0 small">Full Name</Label>
          <Input type="text" name="name"  required  placeholder="Full Name" className="mb-3" onChange={handleFill} value={fill.name} />
          <Label className="mb-0 small">Email</Label>
          <Input type="email" name="email"  required  placeholder="Email" className="mb-3" onChange={handleFill} value={fill.email} />
          <Label className="mb-0 small">Phone No.</Label>
          <Input type="tel" name="phone"  required placeholder="Phone Number"  className="mb-3" onChange={handleFill} value={fill.phone} />
          {formData.components.map((data, index) => (
            <FormTypeSelector key={index} data={{question: data.question,options: data.options, isRequired:data.is_required, id: data.id, type: data.qtype , handleChange}} />
          ))}
          <div  className="text-center">
        <Button color="primary" className="mt-3" outline size="lg" type="submit">Submit</Button>
        </div>
        </form>
      </Container></>}
      </div>
    </Container>
    </>
  );

}

export default ViewForm;