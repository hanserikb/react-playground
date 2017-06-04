var React = require('react');
var PropTypes = require('prop-types');

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

module.exports = Rides;