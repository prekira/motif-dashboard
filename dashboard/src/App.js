import React from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom'
import Dashboard from './Dashboard'
import OperantMultiView from './OperantMultiView'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/operant' component={OperantMultiView}/>
        </Switch>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
