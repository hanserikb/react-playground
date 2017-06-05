const React = require('react');
const PropTypes = require('prop-types');
const RideItem = require('./RideItem');
const Spinner = require('../Spinner');

const Rides = ({loading, rides}) => (
  <div className="rides">
    { <Spinner show={loading} /> }
    <ul className="rides--list">
      { rides.map((ride, index) => <RideItem key={index} ride={ride} />) }
    </ul>
  </div>
);
Rides.propTypes = {
  rides: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

module.exports = Rides;