import React from 'react';
import PropTypes from 'prop-types';

import DisablingWrapper from 'components/DisablingWrapper';
import AdSLot from '../AdSLot';

class RightBottomAd extends React.PureComponent {
  render() {
    const { className, targets } = this.props;

    return (
      <DisablingWrapper type="ad" placeholder={null}>
        <AdSLot
          selector="div-gpt-ad-52755983-0"
          className={className}
          slot="/51542463/news__rsbar_b2"
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
}

RightBottomAd.propTypes = {
  className: PropTypes.string,
  targets: PropTypes.array,
};

RightBottomAd.defaultProps = {
  className: '',
  targets: [],
};

export default RightBottomAd;
