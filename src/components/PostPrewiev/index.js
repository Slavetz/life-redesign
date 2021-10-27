import React from 'react';
import cn from 'classnames';

import MediaItem from 'components/MediaItem';
import s from './style.module.scss';

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
