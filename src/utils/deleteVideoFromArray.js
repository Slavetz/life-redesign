export default function deleteVideoFromArray(array, video) {
  return array.filter((item) => item._id !== video._id);
}
