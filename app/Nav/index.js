const React = require('react');
const NavLink = require('react-router-dom').NavLink;
require('./styles.css');

function Nav() {
  return (
      <ul className="navigation">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
      </ul>
    );
}

module.exports = Nav;