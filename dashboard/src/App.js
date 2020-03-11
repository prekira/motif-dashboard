import React from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom'
//import logo from './logo.svg';
//import Unit_component from './Unit_component.js';
import Dashboard from './Dashboard'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Switch>
          <Route path='/' component={Dashboard}/>
        </Switch>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
