const React = require('react');
const PropTypes = require('prop-types');
const RideItem = require('./RideItem');

const Rides = props => (
  <div className="rides">
    { props.loading ? <h2>Loading..</h2> : '' }
    <ul className="rides--list">
      { props.rides.map((ride, index) => <RideItem key={index} ride={ride} />) }
    </ul>
  </div>
);
Rides.propTypes = {
  rides: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

module.exports = Rides;