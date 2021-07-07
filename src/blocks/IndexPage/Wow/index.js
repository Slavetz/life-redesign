import React from 'react';
import cn from 'classnames';

import { useScreenState } from 'context/GlobalContext';

import PostPrewiev from 'components/PostPrewiev';
import NewsSwiper from 'blocks/IndexPage/NewsSwiper';
import RedLineTitle from 'components/RedLineTitle';

import grid from 'templates/IndexPage/styles.module.scss';

export default function Wow({ data }) {
  const { mwVerTablet } = useScreenState();
  const sliderData = mwVerTablet ? data : data.slice(1, data.length);
  return (
    <>
      <div className={cn(grid.fullwidth)}>
        <RedLineTitle title="WOW" />
      </div>
      {!mwVerTablet && (
        <div className={cn(grid.fullwidth)}>
          <PostPrewiev data={data[0]} type="fullwidthCard" />
        </div>
      )}
      <div className={cn(grid.fullwidth)}>
        <NewsSwiper data={sliderData} />
      </div>
    </>
  );
}
