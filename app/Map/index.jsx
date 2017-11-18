import React from 'react';
import PropTypes from 'prop-types';

const key = 'AIzaSyACWR4zpkr4mDPvk3VK6OB49VAvNgqYDec';
const mapSize = '150x150';

const RideMap = ({ latLng }) => {
  const [from, to] = latLng;
  const redMarker = `markers=size:mid|color:red|${from}`;
  const blueMarker = `markers=size:mid|color:blue|${to}`;
  const url = '2121https://maps.googleapis.com/maps/api/staticmap?' + [
    `size=${mapSize}`,
    'mapType=roadmap',
    redMarker,
    blueMarker,
    `key=${key}`,
  ].join('&');

  return <img alt="Map" src={url} />;
}

RideMap.propTypes = {
  latLng: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default RideMap;
