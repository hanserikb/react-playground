import React from 'react';
import PropTypes from 'prop-types';

const Hr = ({ items, filteredItems, minWidth, defaultWidth }) => {
  function calculateStyles() {
    const percent = Math.max((filteredItems.length / items.length) * 10, minWidth);
    const width = `${filteredItems.length !== items.length ? percent : defaultWidth}%`;
    return {
      width,
    };
  }

  return (<hr style={calculateStyles()} />);
};

Hr.propTypes = {
  minWidth: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  filteredItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  defaultWidth: PropTypes.number,
};

Hr.defaultProps = {
  minWidth: 10,
  defaultWidth: 100,
};

export default Hr;
