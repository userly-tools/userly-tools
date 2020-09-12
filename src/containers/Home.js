import React from 'react'
import {  Col, Container, Row } from 'reactstrap';
import CustomNavbar from '../components/CustomNavbar';
import LandingImage from '../assets/home-image.png'
import FancyArrow from '../assets/fancy-arrow.png'
import Icon from '@mdi/react';
import {   mdiAccountGroupOutline, mdiCalendarMultiselect, mdiCashUsdOutline, mdiChartDonut, mdiCheckCircleOutline, mdiGauge, mdiHandHeartOutline, mdiLockOutline, mdiWhatsapp } from '@mdi/js';

const homeInfo =[
  {
    img: mdiAccountGroupOutline,
    text: "Recruit and manage participants"
  }, {
    img: mdiWhatsapp,
    text: "One tap WhatsApp announcements"
  }, {
    img: mdiHandHeartOutline,
    text: "Extensive community support & user testing templates"
  }, {
    img: mdiCashUsdOutline,
    text: "Participant incentive tracker"
  }, {
    img: mdiChartDonut,
    text: "AI driven analytics "
  }, {
    img: mdiCalendarMultiselect,
    text: "CALENDAR integration and more"
  },
]

const cardsData = [
  {
    img: mdiGauge,
    head: "Efficient",
    text: "Reduce participant recruitment and management  time by upto 75%"
  }, {
    img: mdiLockOutline,
    head: "Privacy & Security",
    text: "Free & Open Source. Self-host or use one of our state of the art secure servers"
  }, {
    img: mdiCheckCircleOutline,
    head: "Validate",
    text: "Close the empathy gap by getting real insights fast direct from the users"
  }, 
]

const Home = () => {
  
  return (
    <>
    <CustomNavbar colorV="white" navC="white" />
    <Container fluid className="px-0 pb-4" style={{background: "white", backgroundImage: `url(${LandingImage})`, backgroundRepeat: "no-repeat", backgroundSize: "50%", backgroundPosition: "80% 0%"}}>
      <div className="px-0 px-md-5 mx-3"> 
        <div className="d-block d-md-none">
          <h1 className="head  mb-0 text-primary mt-md-4">FOCUS</h1>
          <h1 className="head  text-primary mb-0" >ON THE USER</h1>
          <h3 className="text-secondary font-weight-medium mb-0" >& leave the logistics to us</h3>
        </div>
        <div className="d-none d-md-block">
          <h1 className="head display-3 mb-0 text-primary mt-md-4">FOCUS</h1>
          <h1 className="head display-3 text-primary mb-0" style={{transform: "translateY(-30%)"}}>ON THE USER</h1>
          <h1 className="text-secondary font-weight-medium mb-0" style={{transform: "translateY(-100%)"}}>& leave the logistics to us</h1>
        </div>
        <Row>
          <Col  xs={12} md={6}className="text-secondary head">
          {homeInfo.map((data, index) => (
            <div className="mt-3" key={index}>
              <Icon path={data.img} className="mr-4" size={1.4} />
              <span style={{opacity: "0.7"}}>{data.text}</span>
            </div>
          ))}
          </Col>
          <Col className="d-flex" xs={12} md={6}>
          <div className="mt-auto mb-0 text-center w-100" style={{transform: "translateY(50%)"}}>
            <p style={{color: "#5D2CFF", opacity: "0.6"}}>Explore why PMs and UX researchers love us</p>
            <img src={FancyArrow} width="70" alt="" />
          </div>
          </Col>
        </Row>
      </div>
    </Container>
    <Container fluid className="px-0 mt-5 pt-5" style={{background: "#F5F4FA"}}>
      <div className="px-0 px-md-5 mx-3 text-center"> 
        <h1 className="head text-primary text-center py-4">Why PMs and UX researchers love us ?</h1>  
        <Row className="justify-content-center mt-4 mb-5">
        {cardsData.map((data, i) => (
          <Col xs={12} md={3} key={i} className="shadow-sm mx-auto rounded-lg py-5 my-3 my-md-0 px-4 bg-white text-center">
            <Icon path={data.img} size={3} />
            <p className="head text-primary h4 font-weight-light my-4">{data.head}</p>
            <p className="mb-0 px-3 font-weight-light">{data.text}</p>
          </Col>
        ))}
        </Row>
        <img className="mt-4" src={FancyArrow} width="70" alt="" style={{transform: "rotate(180deg)"}} />
        <p className="pb-3 mb-0 pt-4" style={{opacity: "0.6"}}>Made with <span role="img" aria-label="heart">❤️</span> in Bharat</p>
      </div>
    </Container>
    </>
  );

}


export default Home;