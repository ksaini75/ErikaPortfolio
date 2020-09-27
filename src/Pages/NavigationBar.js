import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/Navbar.css';
import ErikaMoyaResume from '../Documents/Erika Moya Resume.docx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon from '../Images/glasses_moya.png';
import Image from 'react-bootstrap/Image';


toast.configure()

function NavigationBar () {
  
const notify = () => {
  toast.warning ('📃 Downloading Resume!', 
  { position: toast.POSITION.TOP_CENTER}
  )
}
  return (
  <React.Fragment>
  <Navbar expand="lg"  className="sticky-top">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
            <Navbar.Brand href="/home"></Navbar.Brand>
            <Image className="erika-icon" src={icon}/>
          
           <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className ="ml-auto">

            <Nav.Item className="px-2"><Nav.Link href="#about">About</Nav.Link></Nav.Item>
            <Nav.Item className="px-2"><Nav.Link href="#experience">Experience</Nav.Link></Nav.Item>
            <Nav.Item className="px-2"><Nav.Link  href={ErikaMoyaResume} rel="noopener noreferrer" download  onClick={notify}>Resume</Nav.Link></Nav.Item>
            <Nav.Item className="px-2">
            <Nav.Link href="https://www.linkedin.com/in/erika-moya-82a608165/" to="" target="_blank">LinkedIn</Nav.Link>
            </Nav.Item>
               
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  </React.Fragment>

)
  }

export default NavigationBar;