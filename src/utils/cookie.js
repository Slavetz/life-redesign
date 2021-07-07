import isServer from './isServer';

const getCookie = (name) => {
  if (!isServer) {
    const matches = document.cookie.match(
      new RegExp(`(?:^|; )${name.replace(/([\\.$?*|{}()[\]/+^])/g, '\\$1')}=([^;]*)`)
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  return undefined;
};

const setCookie = (name, value) => {
  document.cookie = `${name}=${value}; path=/`;
};

export { getCookie, setCookie };
