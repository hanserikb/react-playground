const React = require('react');
const PropTypes = require('prop-types');

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

module.exports = Spinner;
