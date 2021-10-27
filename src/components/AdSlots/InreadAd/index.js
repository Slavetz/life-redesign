import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DisablingWrapper from 'components/DisablingWrapper';

import AdSLot from '../AdSLot';

import styles from './styles.module.scss';

function InreadAd(props) {
  const { className, targets, isAmp, isMobile } = props;

  if (isAmp) {
    return (
      <DisablingWrapper type="ad" placeholder={null}>
        <pre style={{ width: '100%', textAlign: 'center' }}>
          <amp-ad
            width="320"
            height="250"
            type="doubleclick"
            data-slot="/51542463/amp__undtbar"
            data-multi-size="320x100,320x50,300x250"
          />
        </pre>
      </DisablingWrapper>
    );
  }

  if (isMobile) {
    return (
      <DisablingWrapper type="ad" placeholder={null}>
        <AdSLot
          className={cx(styles.root, className, styles.ad)}
          slot="/51542463/pubs__inrd"
          selector="div-gpt-ad-1574343159473-0"
          slotSizes={[[1, 1], [300, 250], 'fluid']}
          targets={targets}
        />
      </DisablingWrapper>
    );
  }

  return (
    <DisablingWrapper type="ad" placeholder={null}>
      <AdSLot
        className={cx(styles.root, className, styles.ad)}
        slot="/51542463/pubs__inrd"
        selector="div-gpt-ad-1574343159473-0"
        slotSizes={[[1, 1], [640, 480], 'fluid', [620, 250], [622, 250]]}
        targets={targets}
      />
    </DisablingWrapper>
  );
}

InreadAd.propTypes = {
  isAmp: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  targets: PropTypes.array,
};

InreadAd.defaultProps = {
  targets: [],
};

export default InreadAd;
