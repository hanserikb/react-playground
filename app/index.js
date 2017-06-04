const React = require('react');
const ReactDOM = require('react-dom');
const Rides = require('./Rides');
const styles = require('./styles/styles.css');
const RideService = require('./RideService');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Available freerider cars',
      loading: true,
      rides: []
    };
  }
  stopLoading() {
    this.setState(Object.assign({}, this.state, { loading: false }));
  }
  setRides(rides) {
    this.setState(Object.assign({}, this.state, {
      rides: rides
    }));
  }
  fetchRides() {
    return RideService.fetch()
      .then(rides => this.setRides(rides))
      .then(this.stopLoading.bind(this))
      .catch((err) => console.error('Something wrong happened: ', err));
  }
  componentDidMount() {
    setTimeout(this.fetchRides.bind(this), 1000);
  }
  render() {
    return (
    <div>
      <h1>{this.state.name} <a target="_blank" href="http://hertzfreerider.se/unauth/list_transport_offer.aspx">Book car</a></h1>
      <Rides rides={this.state.rides} loading={this.state.loading}/>
    </div>
    );
  }
}

module.exports = App;
ReactDOM.render(<App/>, document.getElementById('app'));