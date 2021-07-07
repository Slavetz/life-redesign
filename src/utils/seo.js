// import { POST_TYPES } from 'enums/posts';
import { DEFAULT_SHARE_IMG, ORIGIN } from 'constants/seo';

export function createCanonical(path) {
  return `${ORIGIN}${path.replace(/(\/$|\/amp.*|\/*\?.*)/, '')}`;
}

export function createVideoLD({
  // ?id,
  name,
  description,
  thumbnailUrl,
  url,
  uploadDate,
  embedUrl,
}) {
  return JSON.stringify({
    '@context': 'https://schema.org/',
    '@type': 'VideoObject',
    description,
    thumbnailUrl,
    url,
    inLanguage: 'ru',
    uploadDate,
    name,
    embedUrl,
    // TODO: duration, ?identifier
    publisher: {
      '@id': 'LifeOrganization',
    },
  });
}

export function createLD({ id, title, description, authors, cover, canonical, dateModified, datePublished, yaTopics }) {
  return JSON.stringify({
    '@context': 'https://schema.org/',
    '@type': 'NewsArticle',
    description,
    image: [
      {
        '@context': 'http://schema.org',
        '@type': 'ImageObject',
        url: (cover?.media?.W1200?.url ?? cover?.url) || DEFAULT_SHARE_IMG,
      },
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': id,
    },
    url: canonical,
    identifier: id,
    inLanguage: 'ru',
    dateModified,
    datePublished,
    headline: title,
    // alternativeHeadline: description,
    author:
      authors.length > 0
        ? authors.map((author) => ({
            '@type': 'Person',
            name: author.name,
          }))
        : {
            '@id': 'LifeOrganization',
          },
    about: yaTopics.map((tag) => ({ '@type': 'Thing', name: tag })),
    publisher: {
      '@id': 'LifeOrganization',
    },
    copyrightHolder: {
      '@id': 'LifeOrganization',
    },
    sourceOrganization: {
      '@id': 'LifeOrganization',
    },
    // TODO copyrightYear
    // copyrightYear: 2020,
    isAccessibleForFree: true,
  });
}

function createLink(origin, params) {
  const query = Object.keys(params).reduce((acc, key, idx) => {
    if (params[key]) {
      return `${acc}${idx === 0 ? '?' : '&'}${key}=${params[key]}`;
    }
    return acc;
  }, '');

  return `${origin}${query}`;
}

export function createSocialShareLinks({
  postUrl,
  // tgId = '',
  // tgUrl = 't-do.ru',
  image = '',
  title = '',
  description = '',
  isMobile = false,
}) {
  return [
    {
      social: 'ok',
      link: createLink('https://connect.ok.ru/offer', {
        url: postUrl,
        title: encodeURIComponent(title),
        imageUrl: encodeURI(image),
      }),
    },
    {
      social: 'vk',
      link: createLink('https://vk.com/share.php', {
        url: postUrl,
        title,
        image: encodeURI(image),
        noparse: 'true',
      }),
    },
    {
      social: 'telegram',
      link: createLink('tg://msg_url', {
        url: `${title}%0A${postUrl}`, // %0A — carriage return for Telegram
      }),
      // tgId
      // ? `tg://resolve?domain=SuperRu&post=${tgId}`
      // : `https://${tgUrl}/share/url?url=${postUrl}&text=${encodeURI(title) || encodeURI(description.split('\n')[0])}`,
    },
    {
      social: 'facebook',
      link: createLink('https://facebook.com/v2.8/dialog/share', {
        quote: title,
        href: postUrl,
        display: 'popup',
        client_id: '208992760884513',
      }),
    },
    {
      social: 'twitter',
      link: createLink('https://twitter.com/intent/tweet', {
        text: title || description.split('\n')[0],
        url: postUrl,
        via: 'lifenews_ru',
      }),
    },
    {
      social: 'whatsapp',
      link: createLink(isMobile ? 'whatsapp://send' : 'https://wa.me', {
        text: encodeURIComponent(`${title} — ${postUrl}`),
      }),
    },
    {
      social: 'viber',
      link: createLink('viber://forward', {
        text: encodeURIComponent(`${title} — ${postUrl}`),
      }),
    },
  ];
}
