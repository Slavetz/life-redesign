import React from 'react';
import PropTypes from 'prop-types';

const FullScreen = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#clip0)" fill="#fff">
      <path d="M7.444 0H4.55662v4.26966H.140625v2.86517H7.444V0zM19.9161 7.30337V4.41599h-4.2697V0h-2.8652v7.30337h7.1349zM0 12.6685v2.8873h4.26966v4.416h2.86517v-7.3033H0zM12.6963 19.9717h2.8874v-4.2696h4.416v-2.8652h-7.3034v7.1348z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

FullScreen.propTypes = {
  className: PropTypes.string,
};

export default FullScreen;
