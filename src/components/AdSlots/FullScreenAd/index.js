import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DisablingWrapper from 'components/DisablingWrapper';

import AdSLot from '../AdSLot';

import styles from './styles.module.scss';

function FullScreenAd(props) {
  const { className, targets } = props;
  return (
    <DisablingWrapper type="ad" placeholder={null}>
      <AdSLot
        className={cx(styles.root, className, styles.ad)}
        slot="/51542463/cross__fullscr"
        selector="div-gpt-ad-1574343109192-0"
        targets={targets}
        slotSizes={[
          [100, 100],
          [1, 1],
        ]}
      />
    </DisablingWrapper>
  );
}

FullScreenAd.propTypes = {
  className: PropTypes.string,
};

FullScreenAd.defaultProps = {
  className: '',
};

export default FullScreenAd;
