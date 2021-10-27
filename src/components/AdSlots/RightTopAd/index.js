import React from 'react';
import PropTypes from 'prop-types';

import DisablingWrapper from 'components/DisablingWrapper';
import AdSLot from '../AdSLot';

function RightTopAd(props) {
  const { className, targets } = props;

  return (
    <DisablingWrapper type="ad" placeholder={null}>
      <AdSLot
        selector="div-gpt-ad-52755863-0"
        className={className}
        slot="/51542463/news__rsbar_b1"
        slotSizes={[
          [300, 600],
          [240, 400],
        ]}
        refreshInterval={30000}
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

RightTopAd.propTypes = {
  className: PropTypes.string,
  targets: PropTypes.array,
};

RightTopAd.defaultProps = {
  className: '',
  targets: [],
};

export default RightTopAd;
