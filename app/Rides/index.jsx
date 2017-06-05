const React = require('react');
const PropTypes = require('prop-types');
const RideItem = require('./RideItem');
const Spinner = require('../Spinner');

function Rides({ loading, rides }) {
  return (
    <div className="rides">
      { <Spinner show={loading} /> }
      <ul className="rides--list">
        { rides.map((ride, index) => <RideItem key={index} ride={ride} />) }
      </ul>
    </div>
  );
}

Rides.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

module.exports = Rides;
