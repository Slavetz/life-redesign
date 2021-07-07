import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { useInView } from 'react-intersection-observer';

import styles from './styles.module.scss';
import { isServer } from 'constants/index';
import getCorrectAdSize from 'utils/getCorrectAdSize';
import {useUIStore} from "context/GlobalContext";

const defaultRootMargin = '350px';

const AdSLot = (props) => {
  const { className, selector, refreshInterval, slotSizes, bidSizes, ignoreViewport = false } = props;
  const { experiments } = useUIStore();
  const display = !isServer && experiments?.remove_ad ? 'none' : 'block';
  const [rootMargin, setRootMargin] = useState(defaultRootMargin);
  const [adSlot, setAdSlot] = useState();
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [counter, setCounter] = useState(0);

  const [ref, inView] = useInView(
    {
      threshold: 0,
      rootMargin,
      triggerOnce: !refreshInterval,
    },
    [rootMargin]
  );

  const initAdSlot = () => {
    const { adManager } = window;
    const { clientWidth } = document.documentElement;
    let sizes = {};
    if (!ignoreViewport && (slotSizes || bidSizes)) sizes = getCorrectAdSize(clientWidth, slotSizes, bidSizes);
    setAdSlot(
      adManager.createSlot({
        ...props,
        slotSizes: sizes.slotSize ?? slotSizes,
        bidSizes: sizes.bidSize ?? bidSizes,
      })
    );

    if (refreshInterval) {
      setShouldRefresh(true);
    }
  };

  useEffect(() => {
    if (inView && rootMargin === defaultRootMargin) {
      if (display === 'block') initAdSlot();
      setRootMargin('0px');
    }
  }, [inView,rootMargin,display]);

  useEffect(() => {
    const { adManager } = window;

    if (adSlot) {
      adSlot._init();

      return () => adManager.removeSlotById(adSlot.id);
    }

    return () => {};
  }, [adSlot, adSlot]);

  useEffect(() => {
    if (shouldRefresh) {
      if (inView && counter) adSlot.refreshAd();
      setTimeout(() => setCounter(counter + 1), refreshInterval);
    }
  }, [shouldRefresh, inView, refreshInterval]);

  return <div id={adSlot?.id} ref={ref} className={cx(styles.root, className, selector)} style={{ display }} />;
};

export default AdSLot;
