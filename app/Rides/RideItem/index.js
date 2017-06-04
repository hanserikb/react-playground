const React = require('react');
const moment = require('moment');
const Map = require('../../Map');

const RideItem = props => {
  let startDate = moment(props.ride.startData).format('DD/MM');
  let endDate = moment(props.ride.endData).format('DD/MM');
  let dateStr = startDate == endDate ? 'Today' : `${startDate}-${endDate}`;
  return (
    <li className="rides--listitem" title={props.ride.car}>
      <span className="rides--listitem--date">{dateStr}</span><span className="rides--listitem--location">{props.ride.from.name} - {props.ride.to.name}</span><Map latLng={[props.ride.from.station.location.latLng, props.ride.to.station.location.latLng]} />
    </li>
  )
}

module.exports = RideItem;