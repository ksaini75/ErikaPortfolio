import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
import '../styles/Navbar.css';





const NavigationBar = () => (
   
        <Navbar  className="" >
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
            <Navbar.Brand href="/home"></Navbar.Brand>
            <span className="Moya">Moya</span>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="ml-auto">

            <Nav.Item className="px-2">
            <Nav.Link>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-400}
                duration= {500}>Home</Link>
                </Nav.Link>
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
            </Nav.Item>
            

            <Nav.Item className="px-2"> 
            <Nav.Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration= {800}>About</Link> 
                {/* <Nav.Link href="/about">About</Nav.Link> */} 
                </Nav.Link>
                </Nav.Item>

                <Nav.Item className="px-2">
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="Resume"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration= {500}>Experience</Link>
                {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
                </Nav.Link>
                </Nav.Item>

                
                <Nav.Item className="px-2">
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>Contact</Link>
                {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
                </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item> */}
        </Nav>

    </Navbar.Collapse>
    </Navbar>

)


export default NavigationBar;