const arrayToQuery = (arr, key) => arr.map((value) => `${key}=${value}`, '').join('&');

function objectToQuery(obj) {
  const entries = Object.entries(obj);

  if (entries.length === 0) return '';

  return `${entries
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return arrayToQuery(value, key);
      }

      return `${key}=${value}`;
    })
    .join('&')}`;
}

export default objectToQuery;
