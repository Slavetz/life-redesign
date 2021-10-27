import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3135 2C14.3135 1.44772 13.8658 1 13.3135 1C12.7612 1 12.3135 1.44772 12.3135 2H14.3135ZM12.3135 24.6274C12.3135 25.1797 12.7612 25.6274 13.3135 25.6274C13.8658 25.6274 14.3135 25.1797 14.3135 24.6274H12.3135ZM24.6272 14.3137C25.1795 14.3137 25.6272 13.866 25.6272 13.3137C25.6272 12.7614 25.1795 12.3137 24.6272 12.3137L24.6272 14.3137ZM1.99977 12.3137C1.44748 12.3137 0.999769 12.7614 0.999768 13.3137C0.999768 13.866 1.44748 14.3137 1.99977 14.3137L1.99977 12.3137ZM12.3135 2L12.3135 24.6274H14.3135L14.3135 2H12.3135ZM24.6272 12.3137H1.99977L1.99977 14.3137H24.6272L24.6272 12.3137Z"
      fill="#9A9A9A"
    />
  </svg>
);

Cross.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Cross;
