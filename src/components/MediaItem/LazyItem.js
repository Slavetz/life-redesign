import React from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import s from './styles.module.scss';

const DEFAULT_IMAGE = '/preview-default.png';

const LazyItem = ({ tag, src, poster, media, initialInView, skip = false, isPreview = false, ...rest }) => {
  const supportLazyLoading = process.browser && 'loading' in HTMLImageElement.prototype;

  const [ref, inView] = useInView({
    rootMargin: '350px',
    triggerOnce: true,
    initialInView: initialInView || !process.browser,
    skip,
  });

  const props =
    tag === 'video'
      ? {
          src,
          muted: true,
          loop: true,
          autoPlay: true,
          playsInline: true,
          poster,
        }
      : {
          src: isPreview ? src || DEFAULT_IMAGE : src,
          loading: 'lazy',
          onError: (element) => {
            if (!isPreview) return;
            const { target } = element;
            target.onerror = null;
            target.src = DEFAULT_IMAGE;
          },
        };

  return (
    <div ref={ref} className={cn(s.root, rest.className)}>
      {inView || supportLazyLoading
        ? React.createElement(tag, {
            ...rest,
            ...props,
            className: cn(s.element),
          })
        : null}
    </div>
  );
};

LazyItem.defaultProps = {
  tag: 'img',
  src: null,
  poster: null,
  media: null,
  initialInView: false,
  isPreview: false,
};

export default LazyItem;
