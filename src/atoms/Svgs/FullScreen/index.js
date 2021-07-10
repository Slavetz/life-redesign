import React from 'react';
import PropTypes from 'prop-types';

const FullScreen = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M2.85714 12.8571H0V20H7.14286V17.1429H2.85714V12.8571ZM0 7.14286H2.85714V2.85714H7.14286V0H0V7.14286ZM17.1429 17.1429H12.8571V20H20V12.8571H17.1429V17.1429ZM12.8571 0V2.85714H17.1429V7.14286H20V0H12.8571Z"
      fill="white"
    />
  </svg>
);

FullScreen.propTypes = {
  className: PropTypes.string,
};

export default FullScreen;
