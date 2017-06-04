var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

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
    return fetch('http://localhost:3001/')
      .then(res => res.json())
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
      <h1>{this.state.name}</h1>
      <Rides rides={this.state.rides} loading={this.state.loading}/>
    </div>
    );
  }
}

const Rides = props => (
  <div>
    <h2>{ props.loading ? 'Loading..' : '' }</h2>
    <ul>
      { props.rides.map((ride, i) => (
        <li key={`ride_${i}`}>
          <h3>{ride.from.name} - {ride.to.name}</h3>
        </li>
      ))}
    </ul>
  </div>
);
Rides.propTypes = {
  rides: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}


module.exports = App;
ReactDOM.render(<App/>, document.getElementById('app'));