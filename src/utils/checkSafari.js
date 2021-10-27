/* eslint-disable */

export default function isSafari() {
  if (process.browser) {
    const usAgent = navigator.userAgent.toLowerCase();
    if (usAgent.indexOf('safari') !== -1) {
      if (usAgent.indexOf('chrome') > -1) return false;
      return true;
    }
    return false;
  }
}
