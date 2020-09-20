import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import '../styles/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import {useRef} from 'react';

import Contact from '../Pages/Contact';


// The import for the tiny LinkedIn Icon - make as a footer page.
// import { IoLogoLinkedin } from 'react-icons/io';

// import flowers from '../Images/flowers.jpg';
import Erika from '../Images/erika_profile_2.png';
// import ErikaMoya from '../Images/erika_moya_2.png';

const About = () => {


      const ref=useRef();

      const openModal=()=>{
              ref.current.showModal();
      }
       
      

        return(
           
<React.Fragment>


<Jumbotron className="jumboContainer" fluid id="about">



<Container >

<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet"></link>

<h1 className="about-header">Erika Moya</h1>
<Row>
        <Col className="aboutContent" lg={6}>

        <br/>
        <p className="about-text">Erika Moya is an Alumni of Pace University on the Pleasantville campus. 
        Erika has obtained a Master’s degree in Mental Health Counseling. 
        She is very open-minded to working with all populations for her professional development growth. 
        Erika is very passionate in working with others to help them grow, heal, and become empowered. 
        She seeks to provide an environment where clients can feel safe and welcomed to express themselves freely and work toward a healthy therapeutic relationship.
        

        </p>

        <br/>

        <Contact ref={ref}/>
        <button className="f6 grow bn br-pill ph3 pv2 mb2 dib bg-gold contact-button" onClick={() => openModal()}>Contact Me</button>

        </Col>

        <Col className="about" lg={6}>
         <Image className="about-image" src={Erika}/>
        </Col>
      </Row>
<br/>

     




     

</Container>
</Jumbotron>

<div></div>
</React.Fragment>
        )
    }


export default About;