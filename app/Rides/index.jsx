const React = require('react');
const Component = require('react').Component;
const RideItem = require('./RideItem');
const Spinner = require('../Spinner');
const moment = require('moment');
const RideService = require('../RideService');

class Rides extends Component {

  constructor() {
    super();
    this.fetchRides = this.fetchRides.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.state = {
      loading: false,
      rides: [],
    };
  }

  componentDidMount() {
    return this.fetchRides();
  }

  setRides(rides) {
    this.setState({
      rides,
    });
  }

  startLoading() {
    this.setState({
      loading: true,
    });
  }

  stopLoading() {
    this.setState({
      loading: false,
    });
  }

  fetchRides() {
    /* no-confusing-arrow: false */
    function sortThings(rides) {
      return rides.sort(ride => moment(ride.startData).isSame(new Date(), 'day') &&
          moment(ride.endData).isSame(new Date(), 'day') ? -1 : 1);
    }

    this.startLoading();

    return RideService.fetch()
      .then(rides => sortThings(rides))
      .then(rides => this.setRides(rides))
      .then(this.stopLoading)
      .catch(err => console.error('Something wrong happened: ', err));
  }

  render() {
    return (<div className="rides">
      { <Spinner show={this.state.loading} /> }
      { this.state.rides.length && <ul className="rides--list">
        { this.state.rides.map((ride, index) => <RideItem key={index} ride={ride} />) }
      </ul>}
    </div>);
  }

}

module.exports = Rides;
