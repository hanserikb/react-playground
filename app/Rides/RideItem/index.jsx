import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Map from '../../Map';

function RideItem({ ride }) {
  const startDate = moment(ride.startData).format('DD/MM');
  const endDate = moment(ride.endData).format('DD/MM');
  const dateStr = startDate === endDate ? 'Today' : `${startDate}-${endDate}`;
  return (
    <li className="rides--listitem" title={ride.car}>
      <span className="rides--listitem--date">{dateStr}</span>
      <span className="rides--listitem--location">{ride.from.name} - {ride.to.name}</span>
      <Map latLng={[ride.from.station.location.latLng, ride.to.station.location.latLng]} />
    </li>
  );
}

RideItem.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  ride: PropTypes.object.isRequired,
};

export default RideItem;
