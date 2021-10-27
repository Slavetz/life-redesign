export function getCroppedText(str, count = 95) {
  let needCrop = false;
  function recursionCroppedText(str, count) {
    let localStr = str;
    if (localStr.length > count) {
      needCrop = true;
      localStr = crop(localStr);
      return recursionCroppedText(localStr, count);
    }
    if (needCrop) {
      localStr += '...';
    }
    return localStr;
  }

  function crop(str) {
    let localStr = str;
    const temp = localStr.split(' ');
    temp.splice(temp.length - 1, 1);
    localStr = temp.join(' ');
    return localStr;
  }

  return recursionCroppedText(str, count);
}
