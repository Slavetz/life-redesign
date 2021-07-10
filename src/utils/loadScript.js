export default function loadScript(src, { onload, onerror, ...options }) {
  const _cb = () => {
    if (typeof onload === 'function') onload();
  };
  const _error = () => {
    if (typeof onerror === 'function') onerror();
  };

  if (document && document.getElementById(options?.id)) {
    _cb();
    return;
  }

  const js = document.createElement('script');
  const fjs = document.getElementsByTagName('script')[0];

  js.src = src;
  Object.entries(options).forEach(([property, value]) => {
    js[property] = value;
  });
  js.onload = _cb;
  js.onerror = _error;

  fjs.parentNode.insertBefore(js, fjs);
}
