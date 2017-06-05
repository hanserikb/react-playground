const React = require('react');
const PropTypes = require('prop-types');
const RideItem = require('./RideItem');
const Spinner = require('../Spinner');


Rides.propTypes = {
  rides: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

function Rides({loading, rides}){
    return (
    <div className="rides">
      { <Spinner show={loading} /> }
      <ul className="rides--list">
        { rides.map((ride, index) => <RideItem key={index} ride={ride} />) }
      </ul>
    </div>
  );
}

module.exports = Rides;