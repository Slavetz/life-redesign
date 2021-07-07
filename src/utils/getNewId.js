let lastId = 0;

export default function getNewId(prefix = 'id') {
  lastId += 1;
  return `${prefix}-${lastId}`;
}
