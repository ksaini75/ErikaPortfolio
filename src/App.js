import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import NavigationBar from './Pages/NavigationBar';
import About from './Pages/About';

import Experience from './Pages/Experience';

// import About  from './components/About';
// import Contact from './components/Contact';

// import NavigationBar from './components/NavigationBar';
// import ProjectCard from './components/ProjectCard';



import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render() {
    return(
      // another version of div
      // Switch is used to switch between the different routes
    <React.Fragment>
    <NavigationBar/>
   
        <Router>
          <Switch>
          <Redirect exact from="/" to="/home" />
            <Route  exact path="/home" component={Home}/>
           
       
            <Route  exact path="/About" component={About}/>  
           <Layout>
           <Route  exact path="/Experience" component={Experience}/> 
          </Layout>
           
            {/* <Route  exact path="/Contact" component={Contact}/> */}
        
          
          
          </Switch>
        </Router>

    </React.Fragment>
    );
  }
}

export default App;

