import React from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom'
//import logo from './logo.svg';
//import Unit_component from './Unit_component.js';
import Dashboard from './Dashboard'
import OperantMultiView from './OperantMultiView'
import NORCam from './NORCam'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/operant' component={OperantMultiView}/>
          <Route path='/nor' component={NORCam}/>

        </Switch>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
