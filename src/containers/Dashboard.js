import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../components/Sidebar';

const Dashboard = ({pass, activeTab}) => {
  
  const Inner = pass;

  return (
      <Container fluid>
        <Row style={{minHeight: '100vh', overflowX: "hidden"}} className="py-3">
          <Col xs={12} md={2}>      
            <Sidebar activeTab={activeTab} />
          </Col>
          <Col  xs={12} md={10}>
            <div className="bg-light h-100 shadow-sm" style={{borderRadius: '2rem'}}>
              <Inner />
            </div>
          </Col> 
        </Row>
      </Container>
  );

}

export default Dashboard;