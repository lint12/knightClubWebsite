import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/style.css';
import Home from './pages/Home'; 
import Register from './pages/Register'; 
import Game from './pages/Game'; 
import About from './pages/About'; 

let flaskIP = 'http://'; 

class App extends Component {
  render() {
    return (
      <Router>  
        <div>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/register" render={(props)=><Register {...props} serviceIP={flaskIP}/>}/>
            <Route path="/game" render={(props)=><Game {...props} serviceIP={flaskIP}/>}/>
            <Route path="/about" render={(props)=><About {...props} serviceIP={flaskIP}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
