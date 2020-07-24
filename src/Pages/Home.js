import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Resume from '../Pages/Resume';
import Typical from 'react-typical'
import '../styles/Home.css'
import About from '../Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
    render(){
        return(
<React.Fragment>

<Typical className="typer"
        steps={[ 'Hello, my name is Erika!', 500]}
        loop={Infinity}
        wrapper="p"
      />
<Container  className="homeTitle" id="home">



</Container>

<About/>
<Resume/>
</React.Fragment>
        )
    }
}

export default Home;