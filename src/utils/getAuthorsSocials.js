export function getAuthorsSocials(socials) {
  // eslint-disable-next-line array-callback-return,consistent-return
  return Object.keys(socials).map((socName) => {
    if (socials[socName]) return { icon: `${socName}.inline.svg`, link: socials[socName] };
  });
}
