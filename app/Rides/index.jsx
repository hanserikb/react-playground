import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import RideItem from './RideItem';
import Spinner from '../Spinner';
import Hr from '../SearchBorder';
import RideService from '../RideService';
import { fetchRides } from '../actions/rideActions';

require('./styles.css');

class Rides extends Component {

  constructor() {
    super();
    this.sortRides = this.sortRides.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.onFilterTextChanged = this.onFilterTextChanged.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchRides());
  }

  onFilterTextChanged(event) {
    const filterTerm = event.target.value.trim();

    function rideFilter(ride) {
      return ride.from.station.location.city
          .toLowerCase()
          .includes(filterTerm.toLowerCase()) ||
        ride.to.station.location.city
          .toLowerCase()
          .includes(filterTerm.toLowerCase());
    }

    this.setState({
      filterTerm,
      filteredRides: filterTerm ? this.state.rides.filter(rideFilter) : this.state.rides,
    });
  }

  setRides(rides) {
    this.setState({
      rides,
      filteredRides: rides,
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

  sortRides(data) {
    /* no-confusing-arrow: false */
    return data.sort(ride => moment(ride.startData).isSame(new Date(), 'day') &&
      moment(ride.endData).isSame(new Date(), 'day') ? -1 : 1);

  }

  render() {
    console.log('Rendering ', this.props)
    return (
      <div className="rides">
        <Spinner show={this.props.loading} />
        <input
          className="rides--filter"
          placeholder="Search..."
          type="text"
          onChange={this.onFilterTextChanged}
        />
        {/*<Hr defaultWidth={90} filteredItems={this.props.rides} items={this.props.rides} /> */}
        { this.props.data.length && <ul className="rides--list">
          { this.sortRides(this.props.data).map((ride, index) => <RideItem key={index} ride={ride} />) }
        </ul>}
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    title: ownProps.title,
    loading: state.rides.loading,
    data: state.rides.data,
    filteredRides: state.rides.data,
  };
}
export default connect(mapStateToProps)(Rides);
