import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Photos from "./Photos";
import About from "./About";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
