import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Nav from './Nav';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

const store = configureStore();

require('./styles/styles.css');

ReactDOM.render(
  <Provider store={store}>
  <Router path="/">
    <div>
      <div>
        <Nav />
      </div>
      <div className="container">
        <div className="app-container">
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} title="Hi!" />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </div>
  </Router>
  </Provider>,
  document.getElementById('app'));
