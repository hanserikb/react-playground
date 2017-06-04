const React = require('react');
const PropTypes = require('prop-types');
const key = 'AIzaSyACWR4zpkr4mDPvk3VK6OB49VAvNgqYDec';
const mapSize = '150x150';

const RideMap = props => {
  let [from, to] = Array.isArray(props.latLng) && props.latLng;
  let redMarker = `markers=size:mid|color:red|${from}`;
  let blueMarker = `markers=size:mid|color:blue|${to}`;
  var url = 'https://maps.googleapis.com/maps/api/staticmap?' + [
    `size=${mapSize}`,
    'mapType=roadmap',
    redMarker,
    blueMarker,
    `key=${key}`
  ].join('&');

  return <img src={url} />;
}

RideMap.propTypes = {
  latLng: PropTypes.array
}


module.exports = RideMap;
