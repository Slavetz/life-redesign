import React from 'react';
import cn from 'classnames';
import grid from 'templates/IndexPage/styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import NewsSwiper from 'blocks/IndexPage/NewsSwiper';
import { useScreenState } from 'context/ScreenState';
import RedLineTitle from 'components/RedLineTitle';

function getDoubleCardNumber(ScreenState) {
  const { isDesktop, isHorTablet } = ScreenState;
  if (isDesktop) return 3;
  if (isHorTablet) return 2;
  return 0;
}

export default function Dich({ data }) {
  const ScreenState = useScreenState();
  const doubleCardNumber = getDoubleCardNumber(ScreenState);
  const posts = doubleCardNumber === 2 ? data.slice(0, data.length - 1) : data;
  return (
    <>
      <div className={cn(grid.fullwidth)}>
        <RedLineTitle title="Дичь" />
      </div>

      {doubleCardNumber
        ? posts.map((post, pn) =>
            pn === doubleCardNumber ? (
              <PostPrewiev key={`Dich-${post._id}`} data={post} type="doubleCard" />
            ) : (
              <PostPrewiev key={`Dich-${post._id}`} data={post} type="simple" />
            )
          )
        : null}

      {!doubleCardNumber && (
        <div className={cn(grid.fullwidth)}>
          <NewsSwiper data={data} />
        </div>
      )}
    </>
  );
}
