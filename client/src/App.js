import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/home'

function App() {
  return (<React.Fragment>
    <Router>
      <Switch>
        <Route path= "/" exact component = {Home} /> 
      </Switch>
    </Router>
  </React.Fragment>);
}

export default App;
