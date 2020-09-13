import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, TabContent, TabPane, Button } from 'reactstrap';
import Dashboard from './Dashboard'
import axios from 'axios'

const ViewProjectContainer = () => {
  
  return (
    <>
      <Dashboard pass={ViewProject} activeTab={0} />
    </>
  );

}

const navLinks = [
  "RESPONSES",
]

const ViewProject = () => {

  const history = useHistory();
  const [formData, setFormData] = useState("")
  const formId = window.location.href.split("/").pop();

  useEffect(() => {
    const headers = {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    };
    axios.get(`http://userly.herokuapp.com/forms/` + formId, headers)
    .then(res => {
      setFormData(JSON.stringify(res.data));
    }).catch(err => {
      setFormData("No Such Project Id.")
    })
  }, [formId])
  const [activeTab, setActiveTab] = useState(0);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const deleteProject = () => {
    console.log("Delete", formId)
  }

  return (
    
    <Container className="px-4" fluid>
      <div className="px-3 pt-3">
        <Row className="pt-3">
          <Col className="px-md-3" xs={1}>
            <Icon path={mdiArrowLeft} size={2} color="#5D2CFF" onClick={() => {history.push("/projects")}} />
          </Col>
          <Col xs={12} md={11} className="d-flex w-100">
            <Nav className="mb-0 border-0 w-100" tabs>
              {navLinks.map((name, i) => (
                <NavItem key={i} className="mr-auto d-flex align-items-center">
                <h4
                  className={`head mb-0 ${activeTab === i ? "text-primary border-primary" : ""} `}
                  style={{borderBottom: activeTab === i ? "0.2rem solid #5D2CFF" : "", opacity: activeTab === i ? "" : "0.4"}}
                  onClick={() => { toggle(i); }}
                >
                  {name}
                </h4>
              </NavItem>
              ))}
                <NavItem className="ml-auto d-flex align-items-center">
                  <Button color="danger" onClick={deleteProject} outline size="sm" >Delete Project</Button>
                </NavItem>
            </Nav>
          </Col>
          <Col xs={12} md={{offset: 1, size: 11}} className="mt-4 px-0">
          <TabContent activeTab={(activeTab+1).toString()}>
              <TabPane tabId="1">
                <p className="font-weight-light px-3">Show Responese Here, Object fetched using API...</p>
                {formData}
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </Container>
  
  )
}

export default ViewProjectContainer;