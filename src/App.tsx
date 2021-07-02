import React from 'react';
import './App.css';
import IntroNasa from './IntroNasa';
import AppContent from './AppContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="App-header">
              <nav>
                  <ul>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/button">Button Click Counter</Link>
                      </li>
                  </ul>
              </nav>
              <Switch>
                  <Route path="/about">
                      <IntroNasa/>
                  </Route>
                  <Route path="/button">
                      <AppContent/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
