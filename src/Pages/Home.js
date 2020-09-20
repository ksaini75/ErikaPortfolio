import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Experience from '../Pages/Experience';


import '../styles/Home.css'
import About from '../Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

class Home extends Component{
    render(){
        return(
<React.Fragment>
<div  id="home">
<About/>

<Container  className="homeTitle" id="home">



</Container>


<Experience/>
<Footer/>
</div>
</React.Fragment>

        )
    }
}

export default Home;