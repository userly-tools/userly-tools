import { mdiBellOutline, mdiMagnify, mdiPlus, mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Progress } from 'reactstrap';
import Dashboard from './Dashboard'
import axios from 'axios'

const ProjectContainer = () => {
  
  return (
    <>
      <Dashboard pass={Project} activeTab={0} />
    </>
  );

}

const Project = () => {

  const history = useHistory();
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    };
    axios.get(`http://userly.herokuapp.com/projects/rohanraj`, headers)
    .then(res => {
      var finalData = []
      res.data.forEach(element => {
        finalData.push({
          id: element.id,
          title: element.title,
          desc: element.desc,
          participants: element.num_participants,
          tag: element.tag,
          incentive: element.incentive,
          progress: element.progress 
        })
      });
      setProjectsData(finalData);
    })
  }, [])

  const openProject = (id) => {
    history.push("/view-project/" + id)
  }

  return (
    
    <Container className="px-4" fluid>
      <div className="px-3 pt-3">
        <Row className="pt-3">
          <Col xs="auto" className="d-flex align-items-center">
            <h4 className="head text-uppercase mb-0">Projects</h4>
          </Col>
          <Col style={{position: "relative"}}>
            <span><Icon path={mdiMagnify} style={{position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)"}} color="#5D2CFF" size={1} /></span><Input type="text" placeholder="Search Project" className="bg-white rounded-pill py-3 pl-5 text-secondary border-0" />
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <Icon path={mdiBellOutline} className="hoverPointer" color="#5D2CFF" size={1.2} />
          </Col>
        </Row>
        <div className="mt-4 pt-2 d-block d-md-flex">
          <Button size="sm" className="rounded-pill my-1 my-md-0 px-4 py-0 small active mr-auto" outline color="primary">All</Button>
          <Button size="sm" className="rounded-pill my-1 my-md-0 px-4 py-0 small mr-auto" outline color="primary">1on1 Interviews</Button>
          <Button size="sm" className="rounded-pill my-1 my-md-0 px-4 py-0 small mr-auto" outline color="primary">Focus Group</Button>
          <Button size="sm" className="rounded-pill my-1 my-md-0 px-4 py-0 small mr-auto" outline color="primary">Multi Day Study</Button>
          <Button size="sm" className="rounded-pill my-1 my-md-0 px-4 py-0 small mr-auto" outline color="primary">Unmoderated Task</Button>
        </div>
        <Row className="mt-5">
          <Col className="mb-4 hoverPointer" onClick={() => {history.push("/new-project")}} xs={12} md={6} lg={3}>
            <div className="bg-primary  shadow-sm d-flex align-items-center justify-content-center" style={{height: "250px", borderRadius: "1.5rem"}}>
              <Icon path={mdiPlus} size={4} color="white" />
            </div>
          </Col>
          {projectsData.map((data, i) => (
            <Col className="mb-4 hoverPointer" onClick={() => {openProject(data.id)}} key={i} xs={12} md={6} lg={3}>
              <div className="bg-white  shadow-sm" style={{height: "250px", borderRadius: "1.5rem", position: "relative", overflow: "hidden"}}>
                <div className="px-4 pt-4">
                  <h5 className="d-flex">{data.title} <Icon  path={mdiStar} className="ml-auto" color="#5D2CFF" size={1.2} /></h5>
                  <p className="font-weight-light mb-4">{data.desc}</p>
                  <Progress className="rounded-pill mb-4" value={data.progress}>{data.progress}%</Progress>
                  <p className="font-weight-light mb-0 small">No of Participants: <span className="text-primary font-weight-bold ml-3">{data.participants}</span></p>
                  <p className="font-weight-light mb-0 small">Incentive: <span className="text-primary font-weight-bold ml-3">{data.incentive}</span></p>
                </div>
                <div className="bg-primary text-white px-3  font-weight-light small py-1" style={{position: "absolute", right: '0px', borderRadius: "50rem 0 0 50rem"}}>
                  {data.tag}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  
  )
}

export default ProjectContainer;