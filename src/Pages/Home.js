import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Resume from '../Pages/Resume';

import '../styles/Home.css'
import About from '../Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
    render(){
        return(
<React.Fragment>
<About/>

<Container  className="homeTitle" id="home">



</Container>


<Resume/>
</React.Fragment>
        )
    }
}

export default Home;