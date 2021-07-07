/**
 * clientWidth {number}
 * slotSize {Array}
 * bidSize {Array}
 * */
export default function getCorrectAdSize(clientWidth, slotSize, bidSize) {
  const filerSizes = (clientWidth, sizes) => sizes?.filter((size) => size[0] < clientWidth);

  return {
    slotSize: filerSizes(clientWidth, slotSize),
    bidSize: filerSizes(clientWidth, bidSize),
  };
}
