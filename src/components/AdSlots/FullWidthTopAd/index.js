import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DisablingWrapper from 'components/DisablingWrapper';

import styles from './styles.module.scss';
import AdSLot from '../AdSLot';

class FullWidthTopAd extends React.PureComponent {
  render() {
    const { className, ssr, targets } = this.props;
    return (
      <DisablingWrapper type="ad" placeholder={null}>
        <AdSLot
          selector="div-gpt-ad-1577434005976-0"
          className={cx(styles.root, className)}
          slot="/51542463/billboard_first_screen"
          slotSizes={[
            [970, 250],
            [728, 90],
          ]}
          ignoreViewport
          ssr={ssr}
          targets={targets}
        />
      </DisablingWrapper>
    );
  }
}

FullWidthTopAd.propTypes = {
  className: PropTypes.string,
};

FullWidthTopAd.defaultProps = {
  className: '',
};

export default FullWidthTopAd;
