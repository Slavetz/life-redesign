function compareObjects(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  return false;
}

export { compareObjects };
