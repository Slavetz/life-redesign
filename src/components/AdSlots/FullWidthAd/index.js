import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DisablingWrapper from 'components/DisablingWrapper';

import AdSLot from '../AdSLot';

import styles from './styles.module.scss';

class FullWidthAd extends React.PureComponent {
  render() {
    const { className, targets, isMobile } = this.props;
    return isMobile ? (
      <DisablingWrapper type="ad" placeholder={null}>
        <AdSLot
          selector="div-gpt-ad-52780343-0"
          className={cx(styles.root, className)}
          slot="/51542463/cross__undtbar"
          slotSizes={[
            [300, 250],
            [320, 100],
          ]}
          targets={targets}
          collapseEmptyDiv="before"
          bid={{ bidder: 'criteo', params: { networkId: 5208 } }}
          bidSizes={[[300, 250]]}
        />
      </DisablingWrapper>
    ) : (
      <AdSLot
        className={cx(styles.root, className)}
        slot="/51542463/cross__undtbar"
        selector="div-gpt-ad-52780343-0"
        slotSizes={[
          [728, 90],
          [970, 250],
          [1260, 240],
          [1260, 250],
          [1290, 240],
          [1290, 250],
        ]}
        targets={targets}
        collapseEmptyDiv="before"
        bid={{ bidder: 'criteo', params: { networkId: 5208 } }}
        bidSizes={[
          [970, 250],
          [1260, 240],
          [1260, 250],
          [1290, 240],
          [1290, 250],
        ]}
      />
    );
  }
}

FullWidthAd.propTypes = {
  isMobile: PropTypes.bool,
  className: PropTypes.string,
  targets: PropTypes.array,
};

FullWidthAd.defaultProps = {
  isMobile: false,
  className: '',
  targets: [],
};

export default FullWidthAd;
