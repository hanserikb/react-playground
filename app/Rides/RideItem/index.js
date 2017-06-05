const React = require('react');
const moment = require('moment');
const Map = require('../../Map');

const RideItem = ({ride}) => {
  let startDate = moment(ride.startData).format('DD/MM');
  let endDate = moment(ride.endData).format('DD/MM');
  let dateStr = startDate == endDate ? 'Today' : `${startDate}-${endDate}`;
  return (
    <li className="rides--listitem" title={ride.car}>
      <span className="rides--listitem--date">{dateStr}</span><span className="rides--listitem--location">{ride.from.name} - {ride.to.name}</span><Map latLng={[ride.from.station.location.latLng, ride.to.station.location.latLng]} />
    </li>
  )
}

module.exports = RideItem;