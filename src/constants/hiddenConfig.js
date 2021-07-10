const { LIFE_LITE } = process.env;
const hiddenConfig = {
  NONE: {
    ad: false,
    exchange: false,
    video: false,
    widget: false,
    gtag: false,
    amp: false,
  },
  LITE: {
    ad: true,
    exchange: true,
    video: true,
    widget: true,
    gtag: true,
    amp: true,
  },
  CUSTOM: {
    ad: false,
    exchange: false,
    video: false,
    widget: false,
    gtag: false,
    amp: false,
  },
};

export const isHidden = LIFE_LITE ? hiddenConfig[LIFE_LITE] : hiddenConfig.NONE;
export const hiddenType = {
  ad: 'ad',
  exchange: 'exchange',
  video: 'video',
  widget: 'widget',
  gtag: 'gtag',
  amp: 'amp',
};
