import React from 'react';
import cn from 'classnames';

import RightTopAd from "components/AdSlots/RightTopAd";
import RightBottomAd from "components/AdSlots/RightBottomAd";

import s from "./styles.module.scss";

export default function RightAsideAds({ data }) {
  return (
    <>
        <div className={cn(s.fakeAsideAd)}>
            <RightTopAd />
        </div>
        <div className={cn(s.fakeAsideAd, s.fakeAsideAdFixed)}>
            <RightBottomAd />
        </div>
    </>
  );
}
