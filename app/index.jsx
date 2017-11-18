const React = require('react');
const ReactDOM = require('react-dom');
const Rides = require('./Rides');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Nav = require('./Nav');
require('./styles/styles.css');

const About = () => (
  <div className="about">
    <h1>Hello this is about</h1>
    <img alt="this is a thing" src="https://i.imgflip.com/pgw3i.jpg" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Fugiat praesentium eius, ipsam voluptates.
      Voluptatum, qui quod facere debitis optio ab eum magnam nostrum unde illo modi,
      eaque perferendis cumque dolor!</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Available freerider cars',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} <a target="_blank" rel="noopener noreferrer" href="http://hertzfreerider.se/unauth/list_transport_offer.aspx">Book</a></h1>
        <Rides />
      </div>
    );
  }
}

module.exports = App;
ReactDOM.render(
  <Router path="/">
    <div>
      <div>
        <Nav />
      </div>
      <div className="container">
        <div className="app-container">
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </div>
  </Router>,
  document.getElementById('app'));
