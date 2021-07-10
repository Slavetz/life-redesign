export const ORIGIN = 'https://life.ru';
export const DEFAULT_LOGO = 'https://life.ru/img/logo.png';
export const DEFAULT_SHARE_IMG = 'https://static.life.ru/tmp/photo_2020-03-31%2020.16.46-1585675041389.jpeg';

export const NewsMediaOrganization = {
  '@context': 'https://schema.org/',
  '@type': 'NewsMediaOrganization',
  name: 'LIFE',
  logo: {
    '@context': 'http://schema.org',
    '@type': 'ImageObject',
    url: DEFAULT_LOGO,
    height: 60,
    width: 159,
  },
  '@id': `LifeOrganization`,
  url: ORIGIN,
  masthead: `${ORIGIN}/page/about`,
  foundingDate: '2009-09-01',
  address: {
    '@context': 'http://schema.org',
    '@type': 'PostalAddress',
    streetAddress: 'Бумажный проезд, 14, стр. 2',
    postalCode: '127015',
    addressLocality: 'Москва',
    addressCountry: 'Россия',
  },
  telephone: '+7 495 663-38-11 ',
  faxNumber: '+7 495 663-38-12',
  email: 'info@life.ru',
  sameAs: [
    'https://ru.wikipedia.org/wiki/Life_(%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)',
    'https://www.facebook.com/lifenews.ru/',
    'https://twitter.com/lifenews_ru',
    'https://www.instagram.com/lifenews_ru/',
    'https://vk.com/life',
    'https://t.me/lifenews',
    'https://ok.ru/lifenews',
    'https://www.youtube.com/channel/UCVSw9pZrmStZAgQQSz5RQKA',
    'https://www.youtube.com/channel/UC3wf1pcRkwV-NvUpBfHovPw',
  ],
};
