const { PROD_ENV } = process.env;

export const CURRENT_YEAR = new Date().getFullYear();
export const isServer = typeof window === 'undefined';

export const GTM_ID = process.env.WEB_GTAG || (PROD_ENV ? 'GTM-PP6FH3W' : 'GTM-K84FNRP');
export const OPT_ID = process.env.OPT_ID || (PROD_ENV ? 'OPT-PHP27MP' : 'OPT-NF85DVL');

export const PUSH = {
  oneSignal: {
    script: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
  },
};

export const ESCAPE_KEY = 27;
export const ENTER_KEY = 13;
export const RIGHT_ARROW_KEY = 39;
export const LEFT_ARROW_KEY = 37;

export const HTML_PATTERN = /<\/?[a-z][\s\S]*>/i;

// eslint-disable-next-line no-useless-escape
export const EMAIL_VALIDATE_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

export const NON_BRAND = 'POST_TYPE_NON_BRAND';

export const MAX_LENGTH_AUTHOR_POSTS = 10;
