const React = require('react');
const PropTypes = require('prop-types');
const RideItem = require('./RideItem');

const Rides = props => (
  <div className="rides">
    { props.loading ? (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    ) : '' }
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