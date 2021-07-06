import React from 'react';
import cn from 'classnames';
import grid from 'template/IndexPage/styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import NewsSwiper from 'components/NewsBlocks/NewsSwiper';
import { useGlobalState } from 'context/globalContext';
import RedLineTitle from 'components/RedLineTitle';

function getDoubleCardNumber(screenType) {
  switch (screenType) {
    case 'desktop':
      return 3;
    case 'hor-tablet':
      return 2;
    default:
      return 0;
  }
}

export default function Dich({ data }) {
  const { screenType } = useGlobalState();
  const doubleCardNumber = getDoubleCardNumber(screenType);
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
