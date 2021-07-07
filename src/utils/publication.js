import { v0 } from 'life-schema';
import { TYPES, WIDE_POST_TYPES } from 'enums/posts';
import { createSocialShareLinks } from 'utils/seo';

export const getAdminPath = (pid, resourceType) =>
  `${resourceType === TYPES.TEXT_STREAM ? 'broadcasts/text' : 'publications'}/${pid}`;

export const checkIsWide = (type) => WIDE_POST_TYPES.indexOf(type) > -1;

export const getTagsTitles = (tags) => tags.map(({ title }) => title);
export const getCategories = (cat) => cat.map(({ title }) => title);
export const getSection = (section) => section.title;
export const getTagTitleFromTarget = (target) => target.find((obj) => obj.name === 'Тэги').value;
export const setTargetUrl = (target, url) => target.concat([{ name: 'url', value: url }]);
export const getCoverCaption = (html, raw) => html ?? v0.convertDraftToHtml(raw);
export const getDescription = (subtitle = '', blocks = []) => {
  let description = subtitle;
  if (!description) {
    const firstTextBlock = blocks.find((el) => el.type && el.type === 'TEXT');
    description = (firstTextBlock?.content?.text ?? '').replace(/<[a-zA-Z\\/][^>]*>/gm, '');
  }

  return description;
};

export const getShareLinks = (title = '', subtitle = '', image = '', postUrl = '', isMobile = false) => {
  const links = createSocialShareLinks({
    title,
    subtitle,
    postUrl,
    image,
    isMobile,
  });

  return links.map(({ social, link }) => ({
    icon: `${social}.inline.svg`,
    link,
  }));
};
