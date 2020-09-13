import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Alert, Button, Col, Container, Input, Row } from 'reactstrap';
import styled from 'styled-components';
import CustomNavbar from '../components/CustomNavbar';

const Login = () => {

  const history = useHistory();

  const [data, setData] = useState({email: "", pass: ""})
  const [colorV, setColorV] = useState("warning")

  const loginUser = (event) => {
    event.preventDefault();
    if(data.email === "root@userly.studio" && data.pass === "superuser") 
      history.push("/projects")
    else
      setColorV("danger")
  }

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }
  
  return (
    <>
    <CustomNavbar colorV="#F5F4FA" navC="light" pos="top" />
    <Container className="d-flex align-items-center justify-content-center" fluid style={{background: "#F5F4FA", minHeight: "100vh"}}>
      <div className="bg-white rounded-lg shadow-sm p-4 p-md-5">
        <Container style={{minWidth: "40vw"}}>
          <Row className="head text-primary justify-content-center text-center pt-3 pb-5">
            <Col xs={6} md={4}>
              <h4 className="mb-0 hoverPointer">LOGIN</h4>
            </Col>
            <Col xs={6} md={4}>
              <h4 className="mb-0 hoverPointer" style={{opacity: "0.6"}}>SIGN UP</h4>
            </Col>
          </Row>
          <Row>
            <Col md={{offset: 1, size: 10}}>
              <form onSubmit={loginUser}>
                <Input type="email" name="email" onChange={handleChange} value={data.email} placeholder="Email Id" autoFocus  required className="bg-light rounded-pill mb-3 my-2 py-4 pl-4 text-secondary border-0" />
                <Input type="password" name="pass" onChange={handleChange} value={data.pass} placeholder="Password" required  className="bg-light rounded-pill my-2 mt-4 py-4 pl-4 text-secondary border-0" />
                <Button className="rounded-pill my-2 mt-4 py-2 w-100 border-0" type="submit" color="primary">Login</Button>
              </form>
              <p className="head mb-0 text-secondary my-3 text-center hoverPointer">Forgot your password?</p>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
      <CustomAlert color={colorV} className={`font-weight-light mx-3 mb-0  ${colorV === "warning"? "animate__animated animate__fadeInDown animate__faster" : "animate__animated animate__shakeX animate__faster" }`}>Login using these credentials; Email: <b>root@userly.studio</b> Password: <b>superuser</b></CustomAlert>
    </Container>
    </>
  );

}

const CustomAlert = styled(Alert)`
  position: absolute;
  bottom: 1rem;
  min-width: 40%;
`

export default Login;