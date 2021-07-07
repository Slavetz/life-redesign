import hiddenConfig from 'constants/hiddenConfig';

// const { PROD_ENV, LIFE_LITE, WEB_GTAG, YM, GA } = process.env;
const { PROD_ENV } = process.env;

export * from './seo';

export const CURRENT_YEAR = new Date().getFullYear();
export const isServer = typeof window === 'undefined';

export const GTM_ID = process.env.WEB_GTAG || (PROD_ENV ? 'GTM-PP6FH3W' : 'GTM-K84FNRP');
export const AMP_GTM_ID = process.env.AMP_GTAG || (PROD_ENV ? 'GTM-5PVLT8V' : 'GTM-P5FNCDL');
export const GA_ID = process.env.GA || (PROD_ENV ? 'UA-72356513-1' : 'UA-166593234-1');
export const YM_ID = process.env.YM || (PROD_ENV ? '34662240' : '62804821');

export const ANALYTICS = {
  gtm: {
    id: GTM_ID,
    amp_id: AMP_GTM_ID,
    script: `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
  },
  ga: {
    id: GA_ID,
    script: 'https://www.google-analytics.com/analytics.js',
  },
  ym: {
    id: YM_ID,
    script: 'https://mc.yandex.ru/metrika/tag.js',
  },
};

export const PUSH = {
  oneSignal: {
    script: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
  },
};

export const ESCAPE_KEY = 27;

export const ENTER_KEY = 13;

export const RIGHT_ARROW_KEY = 39;

export const LEFT_ARROW_KEY = 37;

export const DESKTOP_BP = 1350;
export const LANDSCAPE_BP = 1200;
export const PORTRAIT_BP = 1020;
export const MOBILE_BP = 768;

export const LAPTOP_WIDTH = 1366;
export const TABLET_WIDTH = 1295;
export const VERTICAL_TABLET_WIDTH = 1019;
export const MOBILE_WIDTH = 767;

export const HTML_PATTERN = /<\/?[a-z][\s\S]*>/i;

// eslint-disable-next-line no-useless-escape
export const EMAIL_VALIDATE_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_VALIDATE_PATTERN = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;

export const FILE_MIME_TYPES =
  'image/jpg, image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.ms-powerpoint.presentation.macroEnabled.12, application/vnd.ms-powerpoint, application/x-iwork-keynote-sffkey, application/x-rar-compressed, application/octet-stream, application/zip, application/octet-stream, application/x-zip-compressed, multipart/x-zip, text/html, application/keynote, application/x-7z-compressed';

export const HIDE_MSG_TIME = 2500;

export const INACCURACY_SCROLL = 400;

export const EMPTY_STRING = '';

export const footerStaticLinks = [
  { title: 'Вакансии', _id: 'vacancy', url: 'vacancy', isStatic: true },
  { title: 'RSS', _id: 'rss', url: 'rss', isStatic: true },
  { title: 'Обратная связь', url: 'feedback', isStatic: true },
];

export const isHidden = hiddenConfig[process.env.LIFE_LITE] || hiddenConfig.NONE;

export const OPT_ID = process.env.OPT_ID || (PROD_ENV ? 'OPT-PHP27MP' : 'OPT-NF85DVL');

export const NON_BRAND = 'POST_TYPE_NON_BRAND';

export const MAX_LENGTH_AUTHOR_POSTS = 10;
