import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ className }) => (
  <svg className={className} width="8" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.646 12.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.708L4 11.293 1.172 8.464a.5.5 0 10-.708.708l3.182 3.182zM3.5 0v12h1V0h-1z"
      fill="#000"
    />
  </svg>
);

Arrow.propTypes = {
  className: PropTypes.string,
};

Arrow.defaultProps = {
  className: '',
};

export default Arrow;
