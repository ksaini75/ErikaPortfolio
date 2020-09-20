import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
import '../styles/Navbar.css';
import ErikaMoyaResume from '../Documents/Erika Moya Resume.docx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import erika_icon from '../Images/glasses_moya.png';
import Image from 'react-bootstrap/Image';
import { NavItem } from 'reactstrap';

toast.configure()

function NavigationBar () {
  // const alert = useAlert()

const notify = () => {
  toast.warning ('📃 Downloading Resume!', 
  { position: toast.POSITION.TOP_CENTER}
  )
}

// const Emoji = props => (
// <span className = "emoji" role="img" aria-label={props.label ? props.label : ""}
// aria-hidden={props.label ? "false" : "true" }
// >
//   {props.symbol}
// </span>
// );


  return (
        <Navbar expand="lg"  className="sticky-top">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
            <Navbar.Brand href="/home"></Navbar.Brand>
            <Image className="erika-icon" src={erika_icon}/>
            {/* <span className="Moya">Moya</span> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="ml-auto">

            <Nav.Item className="px-2">
  
            
            <Nav.Link>
          
          <Link
                activeclassname="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration= {800}
         
          >About</Link>
          </Nav.Link>
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
            </Nav.Item>
            

            <Nav.Item className="px-2"> 
            <Nav.Link>
             <Link
                
                activeclassname= "active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-150}
                duration= {800}>Experience</Link>
                {/* <Nav.Link href="/about">About</Nav.Link>  */}
                </Nav.Link> 
                </Nav.Item>


                

                <Nav.Item className="px-2">
                <Nav.Link href={ErikaMoyaResume}  
                onClick={notify}
                >Resume</Nav.Link>
               
                </Nav.Item>

                
                <Nav.Item className="px-2">
                <Nav.Link href="https://www.linkedin.com/in/erika-moya-82a608165/" to="" target="_blank">
                LinkedIn
               
                 </Nav.Link>
               
                </Nav.Item>
                {/* <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item> */}
        </Nav>

    </Navbar.Collapse>
    </Navbar>

)
  }

export default NavigationBar;