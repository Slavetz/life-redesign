import React from 'react';
import cn from 'classnames';

import MediaItem from 'components/MediaItem';
import s from './style.module.scss';
// import doubleCard from 'doubleCard.module';
// import fullwidthCard from 'fullwidthCard.module';
// import fullwidthText from 'fullwidthText.module';
// import simple from 'simple.module';
// import smallCard from 'smallCard.module';

export default function PostPrewiev({ data, type, className, titleClassName }) {
  const { cover } = data;
  const { url, media } = cover || {};
  return (
    <div className={cn(s[type], className)}>
      {type !== 'inline' && <MediaItem src={url} media={media} width={300} className={cn(s.media)} />}
      <div className={cn(s.textContent)}>
        <p className={cn(s.title, titleClassName)}>{data.title}</p>
        {type === 'fullwidthText' && <p className={cn(s.subtitle)}>{data.title}</p>}
        {type !== 'smallCard' && <p className={cn(s.date)}>{data.publicationDate}</p>}
      </div>
    </div>
  );
}
