import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Dashboard from './Dashboard'

const CalendarContainer = () => {
  
  return (
    <>
      <Dashboard pass={Calendar} activeTab={2} />
    </>
  );

}


const Calendar = () => {
  return (
    <Container className="px-4" fluid>
      <div className="px-3 pt-3">
        <Row className="pt-3">
          <Col xs="auto" className="d-flex align-items-center">
            <h4 className="head text-uppercase mb-0">CALENDAR</h4>
          </Col>
        </Row>
        <p className="mt-3 font-weight-light">Add scheduling feature here...</p>
      </div>
    </Container>
  )
}

export default CalendarContainer;