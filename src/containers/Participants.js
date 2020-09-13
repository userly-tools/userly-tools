import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Dashboard from './Dashboard'

const ParticipantContainer = () => {
  
  return (
    <>
      <Dashboard pass={Participants} activeTab={1} />
    </>
  );

}


const Participants = () => {
  return (
    <Container className="px-4" fluid>
      <div className="px-3 pt-3">
        <Row className="pt-3">
          <Col xs="auto" className="d-flex align-items-center">
            <h4 className="head text-uppercase mb-0">PARTICIPANTS</h4>
          </Col>
        </Row>
        <p className="mt-3 font-weight-light">Add all participants list here...</p>
      </div>
    </Container>
  )
}

export default ParticipantContainer;