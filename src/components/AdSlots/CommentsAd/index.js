import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import AdSLot from '../AdSLot';
import styles from './styles.module.scss';
import DisablingWrapper from 'components/DisablingWrapper';
import {useScreenState} from "context/GlobalContext";

const CommentsAd = ({ className, targets }) => {
  const { isMobile } = useScreenState();

  const smallSize = {
    slotSizes: [[1, 1], [300, 250], 'fluid'],
    bidSizes: [[300, 250]],
  };

  const bigSize = {
    slotSizes: [
      [1, 1],
      [728, 90],
      [970, 250],
      [1260, 90],
      [1260, 200],
      [1260, 240],
      [1260, 250],
      // [1290,240],
      [1290, 250],
      'fluid',
    ],
    bidSizes: [[970, 250]],
  };

  const sizes = isMobile ? smallSize : bigSize;

  return (
    <DisablingWrapper type="ad" placeholder={null}>
      <AdSLot
        selector="div-gpt-ad-1574342785827-0"
        className={cx(styles.root, className)}
        slot="/51542463/pubs__abv-comm"
        bid={{ bidder: 'criteo', params: { networkId: 5208 } }}
        targets={targets}
        collapseEmptyDiv="before"
        {...sizes}
      />
    </DisablingWrapper>
  );
};

CommentsAd.propTypes = {
  className: PropTypes.string,
  targets: PropTypes.array,
};

CommentsAd.defaultProps = {
  className: '',
  targets: [],
};

export default CommentsAd;
