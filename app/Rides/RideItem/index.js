const React = require('react');
const moment = require('moment');
const Map = require('../../Map');

const RideItem = props => {
  let startDate = moment(props.ride.startData).format('MMMM Do');
  let endDate = moment(props.ride.endData).format('MMMM Do');
  let dateStr = startDate == endDate ? startDate : `${startDate} to ${endDate}`;
  return (
    <li className="rides--listitem">
      <span className="rides--listitem--text">{dateStr} | {props.ride.from.name} - {props.ride.to.name} | {props.ride.car} </span><Map latLng={[props.ride.from.station.location.latLng, props.ride.to.station.location.latLng]} />
    </li>
  )
}

module.exports = RideItem;