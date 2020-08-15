import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/home";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
