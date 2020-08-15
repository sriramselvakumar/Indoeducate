import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/home";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Options from "./Pages/Options";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/option" component={Options} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
