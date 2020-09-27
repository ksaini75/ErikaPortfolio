import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Experience from '../Pages/Experience';
import About from '../Pages/About';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'


class Home extends Component{
    render(){
        return(

<div  id="home">
<About/>
<Container  className="homeTitle" id="home"></Container>
<Experience/>
<Footer/>
</div>


        )
    }
}

export default Home;