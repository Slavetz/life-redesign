export const throttle = (func, timeFrame) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
};

export const sample = (arr) => {
  const len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
};

export const getVal = (object = {}, key, defaultValue = '') => object[key] || defaultValue;

export const chunks = (array, chunk = 10) => {
  const res = [];
  /* eslint-disable id-length */
  let i;
  let j;

  for (i = 0, j = array.length; i < j; i += chunk) {
    res.push(array.slice(i, i + chunk));
  }

  return res;
};

export const mapPublicationDateToPublicDate = ({ publicationDate, ...data }) => ({
  ...data,
  ...(publicationDate ? { publicDate: publicationDate } : {}),
});
