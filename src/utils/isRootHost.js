export default function () {
  if (window) {
    let currentHref = window.location.href;
    const originHref = window.location.origin;

    if (currentHref[currentHref.length - 1] === '/') {
      const lastSlash = currentHref.length - 1;
      currentHref = currentHref.substring(0, lastSlash);
    }
    return currentHref === originHref;
  }
  throw new Error('Window is not defined');
}
