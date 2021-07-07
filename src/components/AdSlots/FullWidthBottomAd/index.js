import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import loadScript from 'utils/loadScript';

import DisablingWrapper from 'components/DisablingWrapper';

import Close from 'components/Svgs/Close';

import styles from './styles.module.scss';
import AdSLot from '../AdSLot';

import { isHidden } from 'constants/index';

const SCRIPT_ID = 'jquery';
const SCRIPT_SRC = '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

class FullWidthBottomAd extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      loaded: false,
    };

    this.containerRef = React.createRef();

    loadScript(SCRIPT_SRC, { id: SCRIPT_ID });
  }

  componentDidMount() {
    if (!isHidden.ad) {
      this.timer = setTimeout(this.checkIframeLoad, 2000);
    }
  }

  componentWillUnmount() {
    if (!isHidden.ad) {
      clearTimeout(this.timer);
    }
  }

  checkIframeLoad = () => {
    if (!isHidden.ad) {
      const iframe = this.containerRef.current.querySelector('iframe');

      if (!iframe) {
        this.closeContainer();
      } else {
        this.setState({
          loaded: true,
        });
      }
    }
  };

  onClickClose = () => {
    this.closeContainer();
  };

  closeContainer = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { className, targets } = this.props;

    const { isOpen, loaded } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <DisablingWrapper type="ad" placeholder={null}>
        <div className={cx(styles.root, className, loaded && 'loaded')} ref={this.containerRef}>
          <AdSLot
            selector="div-gpt-ad-52335023-0"
            className={styles.ad}
            slot="/51542463/mobile__bo"
            targets={targets}
            slotSizes={[
              [320, 50],
              [1, 1],
              [320, 100],
            ]}
            bid={{ bidder: 'criteo', params: { networkId: 5208 } }}
            bidSizes={[[320, 100]]}
          />
          <button className={styles.close} onClick={this.onClickClose} type="button">
            <Close />
          </button>
        </div>
      </DisablingWrapper>
    );
  }
}

FullWidthBottomAd.propTypes = {
  className: PropTypes.string,
};

FullWidthBottomAd.defaultProps = {
  className: '',
};

export default FullWidthBottomAd;
