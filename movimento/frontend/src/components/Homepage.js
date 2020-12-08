import React, { Component } from "react";
import CreateEntry from "./CreateEntry";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import About from "./About";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/create" component={CreateEntry}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    );
  }
}

export default HomePage;
