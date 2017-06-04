const React = require('react');
const PropTypes = require('prop-types');
const moment = require('moment');
const Map = require('../Map');

const Rides = props => (
  <div className="rides">
    { props.loading ? <h2>Loading..</h2> : '' }
    <ul className="rides--list">
      { props.rides.map((ride, i) => {
        let startDate = moment(ride.startData).format('MMMM Do');
        let endDate = moment(ride.endData).format('MMMM Do');
        let dateStr = startDate == endDate ? startDate : `${startDate} to ${endDate}`;
        return (
        <li className="rides--listitem" key={`ride_${i}`}>
          <span className="rides--listitem--text">{dateStr} | {ride.from.name} - {ride.to.name} | {ride.car} </span><Map latLng={[ride.from.station.location.latLng, ride.to.station.location.latLng]} />
        </li>)
      })}
    </ul>
  </div>
);
Rides.propTypes = {
  rides: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

module.exports = Rides;