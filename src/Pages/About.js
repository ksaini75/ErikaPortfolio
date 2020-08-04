import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ReactTypingEffect from 'react-typing-effect';
import Typical from 'react-typical'
import '../styles/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import { SocialIcon } from 'react-social-icons';

// The import for the tiny LinkedIn Icon - make as a footer page.
// import { IoLogoLinkedin } from 'react-icons/io';

import flowers from '../Images/flowers.jpg';
import Erika from '../Images/Erika_2.png';

class Home extends Component{
    render(){
        return(

<React.Fragment>


<Jumbotron className="jumboContainer" fluid>



<Container >

<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
<h1 className="aboutHeader">Erika Moya</h1>
<Row>
        <Col className="aboutContent" lg={6}>

        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae rutrum mauris, vitae pulvinar turpis. 
        Morbi finibus sapien in orci semper ultrices. Etiam urna erat, finibus a quam in, fermentum aliquam justo. 
        Maecenas accumsan interdum lorem eget euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Cras gravida neque ut hendrerit egestas. Phasellus fermentum nisl eget venenatis rutrum. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        

        </p>

        <br/>

        {/* <button type="button" className="rounded-pill" class="btn btn-warning rounded">My Profile</button> */}
        <button class="f6 grow bn br-pill ph3 pv2 mb2 dib bg-gold">My Profile</button>
        <p> Follow Me 
&nbsp;
{/* this is the linkedin icon below */}
{/* <IoLogoLinkedin/>  */}
{/* <SocialIcon url="http://linkedin.com/jaketrent" /> */}

 </p>
        </Col>

        <Col className="about" lg={6}>
         <Image className="test rounded" src={Erika}/>
        </Col>
      </Row>
<br/>
{/* <Row>
<Col lg={6}>
<p> Follow Me 
&nbsp;
<SocialIcon url="http://twitter.com/jaketrent" bgColor="grey"/>
&nbsp;
<SocialIcon url="http://linkedin.com/jaketrent" />
&nbsp;
<SocialIcon url="http://github.com/jaketrent" />
 </p>
</Col>
</Row> */}
     
    

</Container>
</Jumbotron>


</React.Fragment>
        )
    }
}

export default Home;