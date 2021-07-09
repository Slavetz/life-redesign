import React from 'react';
import FullWidthTopAd from 'components/AdSlots/FullWidthTopAd';
import FullScreenAd from 'components/AdSlots/FullScreenAd';
import s from './styles.module.scss';

const HtmlLayout = ({ children }) => (
  <div className={s.app}>
    <FullScreenAd />
    <div className={s.fakeTopAd}>
      <FullWidthTopAd />
    </div>
    <div className={s.fakeHeader} />
    {children}
    <div className={s.fakeFooter} />
  </div>
);

export default HtmlLayout;
