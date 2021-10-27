const regExOfLocation = new RegExp(/\/\[.+/, 'gm');
export default function getIdForTargets(route, block, blockItem) {
  const routeStr = route.pathname.replace(regExOfLocation, '');
  const id = `${routeStr}_block=${block}${blockItem ? `_item=${blockItem}` : ''}`;
  return id;
}
