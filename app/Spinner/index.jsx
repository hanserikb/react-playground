import React from 'react';
import PropTypes from 'prop-types';

require('./styles.css');

function Spinner({ show }) {
  return show ? (
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  ) : null;
}

Spinner.propTypes = {
  show: PropTypes.bool,
};

Spinner.defaultProps = {
  show: false,
};

export default Spinner;
