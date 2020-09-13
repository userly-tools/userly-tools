import { mdiAccountGroupOutline, mdiCalendarMultiselect, mdiCog, mdiHomeOutline, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from '../assets/logo.png'
import User from '../assets/user.png'

const tabs = [
  {
    img: mdiHomeOutline,
    text: "PROJECTS",
    next: "/projects"
  },{
    img: mdiAccountGroupOutline,
    text: "PARTICIPANTS",
    next: "/participants"
  }, {
    img: mdiCalendarMultiselect,
    text: "CALENDAR",
    next: "/calendar"
  }, 
]

const SideTab = ({img, text, isActive, next}) => {

  const history = useHistory();

  const border = isActive ? "0.2rem solid #dee2e6" : ""; 
  const opacity = isActive ? "1" : "0.7"; 

  const goTo =() =>{
    history.push(next)
  }

  return (
    <div onClick={goTo} className={`border-primary py-2 my-2 d-flex h5 align-items-center hoverPointer px-3 head ${isActive ? "text-primary" : "text-secondary"}`} style={{borderLeft: border, opacity: opacity}}>
      <Icon path={img} size={1.3} /><span className="pl-3">{text}</span>
    </div>
  )
}

const Sidebar = ({activeTab}) => {
  const isSmall = window.innerWidth <= 991.98;
  const pos = isSmall ? "" : "fixed"
  return (
    <div className="d-flex flex-column h-100 pb-3" style={{position: pos}}>
      <CustomBrand className="no-decoration font-weight-bold h3 mb-4 d-flex align-items-center justify-content-center" to="/"><img src={Logo} alt="" width={60} />Userly</CustomBrand>
      {tabs.map((data, i) => (
        <SideTab img={data.img} key={i} text={data.text} next={data.next} isActive={i===activeTab} />
      ))}
      <div className="mt-auto">
        <div className="d-flex align-items-end">
          <img src={User} width="35%" alt="" />
          <div className="head small text-uppercase">
            <p className="mb-0 text-secondary" style={{opacity: "0.5"}}>Logged in as</p>
            <p className="text-secondary h4 mb-2">Royal T.</p>
          </div>
        </div>
        <SideTab img={mdiCog} text="SETTINGS" next="#" />
        <SideTab img={mdiLogout} text="LOGOUT" next="login" />
      </div>
    </div>
    );
};

const CustomBrand = styled(Link)`
  font-family: 'Nunito', sans-serif;
  &:hover {
    color: #5D2CFF
  }
`;

export default Sidebar;