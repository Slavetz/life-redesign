import React from 'react';
import cn from 'classnames';
import grid from 'templates/IndexPage/styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import { useScreenState } from 'context/ScreenState';
import NewsSwiper from 'blocks/IndexPage/NewsSwiper';
import RedLineTitle from 'components/RedLineTitle';

export default function Rassledovaniya({ data }) {
  const { mwVerTablet } = useScreenState();
  const sliderData = mwVerTablet ? data : data.slice(1, data.length);
  return (
    <>
      <div className={cn(grid.fullwidth)}>
        <RedLineTitle title="Расследования и криминал" />
      </div>
      {!mwVerTablet && (
        <div className={cn(grid.fullwidth)}>
          <PostPrewiev data={data[0]} type="fullwidthText" />
        </div>
      )}
      <div className={cn(grid.fullwidth)}>
        <NewsSwiper data={sliderData} />
      </div>
    </>
  );
}
