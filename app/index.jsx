import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

require('./styles/styles.css');

ReactDOM.render(
  <Router path="/">
    <div>
      <div>
        <Nav />
      </div>
      <div className="container">
        <div className="app-container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </div>
  </Router>,
  document.getElementById('app'));
