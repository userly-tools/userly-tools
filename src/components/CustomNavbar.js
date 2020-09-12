import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import styled from 'styled-components';
import Logo from '../assets/logo.png'

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container fluid style={{background: "#F5F4FA"}}>
    <Navbar color="light" className="px-0 mt-2 mx-3 px-md-5 pt-md-4 head" light fixed="top" expand="md">
        <CustomBrand className="no-decoration font-weight-bold h3 mb-0 d-flex align-items-center justify-content-center" to="/"><img src={Logo} alt="" width={60} />Userly</CustomBrand>
        <NavbarToggler className="no-btn-shadow border-0" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <Link className="no-decoration text-grey my-4 ml-3 ml-md-0 my-md-0 mr-md-5 pr-md-4" to="/">About us</Link>
            </NavItem>
            <NavItem>
              <Link className="no-decoration text-grey my-4 ml-3 ml-md-0 my-md-0 mr-md-5 pr-md-4" to="/">How it works?</Link>
            </NavItem>
            <NavItem>
              <Link className="no-decoration ml-3 ml-md-0" to="/login">Login/Signup</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );

}

const CustomBrand = styled(Link)`
  font-family: 'Nunito', sans-serif;
  &:hover {
    color: #5D2CFF
  }
`;

export default CustomNavbar;