import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DisablingWrapper from 'components/DisablingWrapper';

import styles from './styles.module.scss';

import AdSLot from '../AdSLot';

function RightImageAd(props) {
  const { className, targets } = props;

  return (
    <DisablingWrapper type="ad" placeholder={null}>
      <AdSLot
        selector="div-gpt-ad-52755863-0-r"
        className={cx(styles.root, className)}
        slot="/51542463/news__rsbar_b1"
        slotSizes={[
          [300, 600],
          [240, 400],
        ]}
        targets={targets}
        bid={{ bidder: 'criteo', params: { networkId: 5208 } }}
        bidSizes={[
          [300, 600],
          [240, 400],
        ]}
      />
    </DisablingWrapper>
  );
}

RightImageAd.propTypes = {
  className: PropTypes.string,
  targets: PropTypes.array,
};

RightImageAd.defaultProps = {
  className: '',
  targets: [],
};

export default RightImageAd;
