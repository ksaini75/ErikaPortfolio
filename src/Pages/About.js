import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import ReactTypingEffect from 'react-typing-effect';
import Typical from 'react-typical'
import '../styles/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import flowers from '../Images/flowers.jpg';

class Home extends Component{
    render(){
        return(

<React.Fragment>

<Container className ="aboutBox">
<Jumbotron className="jumboContainer" fluid>



<Container >

<h1>about me...</h1>
<Row>
        <Col className="aboutContent" lg={6}>

        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae rutrum mauris, vitae pulvinar turpis. 
        Morbi finibus sapien in orci semper ultrices. Etiam urna erat, finibus a quam in, fermentum aliquam justo. 
        Maecenas accumsan interdum lorem eget euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Cras gravida neque ut hendrerit egestas. Phasellus fermentum nisl eget venenatis rutrum. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis facilisis est sed velit vehicula fermentum. Morbi volutpat velit ut finibus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Ut suscipit suscipit ante, blandit rutrum sapien mattis ac. Nullam ut libero eu tellus condimentum pharetra. Curabitur sed faucibus massa. Proin eleifend nisl a nunc aliquet, non suscipit massa iaculis. 
        Aliquam a felis aliquet odio convallis laoreet ut eu lacus. Curabitur pretium, augue vel rutrum imperdiet, erat dui dignissim nisi, non mollis purus felis sit amet sapien. 
        Proin eget accumsan eros. Donec ante erat, ultrices nec mi quis, consequat viverra quam. 
        Curabitur ac sem nec tellus finibus tempor. Phasellus tincidunt eu nisl et congue. 
        Aliquam et dictum elit, non maximus metus. Sed placerat, risus consequat malesuada elementum, nulla arcu dapibus lorem, a rutrum augue leo et metus.

</p></Col>
        <Col className="about" lg={6}>
        <Image className="picture" src={flowers}/>
        </Col>
      </Row>

</Container>
</Jumbotron>
</Container>

</React.Fragment>
        )
    }
}

export default Home;