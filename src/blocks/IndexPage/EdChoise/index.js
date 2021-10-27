import React from 'react';
import cn from 'classnames';
import grid from 'templates/IndexPage/styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import NewsSwiper from 'blocks/IndexPage/NewsSwiper';
import { useScreenState } from 'context/ScreenState';
import RedLineTitle from 'components/RedLineTitle';

export default function EdChoise({ data }) {
  const { mwVerTablet } = useScreenState();

  return (
    <>
      <div className={cn(grid.fullwidth)}>
        <RedLineTitle title="Выбор редакции" />
      </div>

      {!mwVerTablet && data.map((post) => <PostPrewiev key={`EdChoise-${post._id}`} data={post} type="simple" />)}

      {mwVerTablet && (
        <div className={cn(grid.fullwidth)}>
          <NewsSwiper data={data} />
        </div>
      )}
    </>
  );
}
