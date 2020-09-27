import React, { Component } from 'react';
import { BrowserRouter  as Router} from 'react-router-dom';
import Home from './Pages/Home';

import NavigationBar from './Pages/NavigationBar';



class App extends Component{
  render() {
    return(
   
    <React.Fragment>
    <NavigationBar/>
   
        <Router>
      
         
       <Home/>
      
        </Router>

    </React.Fragment>
    );
  }
}

export default App;

