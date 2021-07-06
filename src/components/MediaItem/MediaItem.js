import React from 'react';
import LazyItem from './LazyItem';

const urlEncode = (url) => encodeURI(url).replace('(', '%28').replace(')', '%29');

const mediaSizes = {
  /* eslint-disable id-length */
  XXS: 86,
  XS: 210,
  S: 600,
  M: 900,
  L: 2400,
  /* eslint-enable id-length */

  W86: 86,
  W210: 210,
  W300: 300,
  W450: 450,
  W600: 600,
  W900: 900,
  W1200: 1200,
  W2400: 2400,

  VW210: 210,
  VW300: 300,
  VW450: 450,
};

const getImageUrlByWidth = (media, width, isAmp) => {
  switch (true) {
    case media.XXS?.url && width <= mediaSizes.XXS:
      return media.XXS.url;
    case media.W86?.url && width <= mediaSizes.W86:
      return media.W86.url;

    case media.XS?.url && width <= mediaSizes.XS:
      return media.XS.url;
    case media.W210?.url && width <= mediaSizes.W210:
      return media.W210.url;

    case media.W300?.url && width <= mediaSizes.W300:
      return media.W300.url;
    case media.W450?.url && width <= mediaSizes.W450:
      return media.W450.url;

    case media.S?.url && width <= mediaSizes.S:
      return media.S.url;
    case media.W600?.url && width <= mediaSizes.W600:
      return media.W600.url;

    case media.M?.url && width <= mediaSizes.M:
      return media.M.url;
    case media.W900?.url && width <= mediaSizes.W900:
      return media.W900.url;

    case isAmp && media.W1200?.url && width <= mediaSizes.W1200:
      return media.W1200.url;

    case media.W2400?.url && width <= mediaSizes.W2400:
      return media.W2400.url;
    case media.L?.url && width <= mediaSizes.L:
      return media.L.url;

    default:
      return null;
  }
};

const getVideoUrlByWidth = (media, width) => {
  switch (true) {
    case media.VW210?.url && width <= mediaSizes.VW210:
      return media.VW210.url;

    case media.VW300?.url && width <= mediaSizes.VW300:
      return media.VW300.url;

    case media.VW450?.url && width <= mediaSizes.VW450:
      return media.VW450.url;

    case media.mp4?.url && true:
      return media.mp4.url;

    default:
      return null;
  }
};

const getImageSrcByParams = (media, { width, size }, isAmp) => {
  if (!media) return null;

  if (size) {
    return getImageUrlByWidth(media, mediaSizes[size], isAmp);
  }
  if (width) {
    return getImageUrlByWidth(media, width, isAmp);
  }
  return null;
};

const getVideoSrcByParams = (media, { width, size }) => {
  if (!media) return null;

  if (size) {
    return getVideoUrlByWidth(media, mediaSizes[size]);
  }
  if (width) {
    return getVideoUrlByWidth(media, width);
  }
  return null;
};

const MediaItem = (props) => {
  const { media, src, alt, width, size, isAmp, isPreview, ...rest } = props;

  const goodSizeForVideo = width > 86 || mediaSizes[size] > 86;
  const checkGif = /gif$/;
  const isVideo = checkGif.test(src);

  const opts = { width, size };

  let placeholder = (isVideo && getImageSrcByParams(media, { width: 86 } || media?.preview, isAmp)) || null;

  let mediaSrc = src;

  if (isAmp && isVideo) {
    mediaSrc = src;
  }

  if (!isAmp && isVideo && goodSizeForVideo) {
    mediaSrc = getVideoSrcByParams(media, opts) ?? src;
  }

  if (!isAmp && isVideo && !goodSizeForVideo) {
    mediaSrc = placeholder ?? src;
  }

  if (!isAmp && !isVideo) {
    mediaSrc = getImageSrcByParams(media, opts) ?? src;
  }

  mediaSrc = mediaSrc && urlEncode(mediaSrc);
  placeholder = placeholder && urlEncode(placeholder);

  // if (!mediaSrc) {
  //   return null;
  // }

  if (isAmp) {
    return <amp-img src={mediaSrc} {...rest} />;
  }

  return (
    <LazyItem
      tag={isVideo && !checkGif.test(mediaSrc) ? 'video' : 'img'}
      src={mediaSrc}
      alt={alt}
      poster={placeholder}
      isPreview={isPreview}
      {...rest}
    />
  );
};

export default MediaItem;
