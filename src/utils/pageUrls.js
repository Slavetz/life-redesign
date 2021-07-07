const getAliasOrIdxUrl = (prefix) => (obj) =>
  `/${prefix}/${obj && (obj.alias || obj.index || obj.idx)}`;

export const seoPaths = {
  videos: 'video',
  specials: 'special',
  category: getAliasOrIdxUrl('c'),
  post: getAliasOrIdxUrl('p'),
  section: getAliasOrIdxUrl('s'),
  video: getAliasOrIdxUrl('v'),
  playlist: getAliasOrIdxUrl('pl'),
  tag: getAliasOrIdxUrl('t'),
  categoryFormat: '/c/[category]',
  postFormat: '/p/[id]',
  sectionFormat: '/s/[section]',
  videoFormat: '/v/[video]',
  playListFormat: '/pl/[video]',
  tagFormat: '/t/[tag]',
};
