import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import loadScript from 'utils/loadScript';

import DisablingWrapper from 'components/DisablingWrapper';

import Close from 'atoms/Svgs/Close';

import { isHidden } from 'constants/hiddenConfig';
import styles from './styles.module.scss';
import AdSLot from '../AdSLot';

const SCRIPT_ID = 'jquery';
const SCRIPT_SRC = '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

function FullWidthBottomAd(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [loaded, setIoaded] = useState(false);
  const [timer, setTimer] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (!isHidden.ad) {
      loadScript(SCRIPT_SRC, { id: SCRIPT_ID });
      setTimer(setTimeout(checkIframeLoad, 2000));
    }
    return () => {
      if (!isHidden.ad) {
        clearTimeout(timer);
      }
    };
  }, []);

  function checkIframeLoad() {
    if (!isHidden.ad) {
      const iframe = containerRef.current.querySelector('iframe');

      if (!iframe) {
        closeContainer();
      } else {
        setIoaded(true);
      }
    }
  }

  function onClickClose() {
    closeContainer();
  }

  function closeContainer() {
    setIsOpen(false);
  }

  const { className, targets } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <DisablingWrapper type="ad" placeholder={null}>
      <div className={cx(styles.root, className, loaded && 'loaded')} ref={containerRef}>
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
        <button className={styles.close} onClick={onClickClose} type="button">
          <Close />
        </button>
      </div>
    </DisablingWrapper>
  );
}

FullWidthBottomAd.propTypes = {
  className: PropTypes.string,
};

FullWidthBottomAd.defaultProps = {
  className: '',
};

export default FullWidthBottomAd;
