const pinRegionPosts = (posts, regionPosts) => {
  const regionNewsIds = regionPosts.map(({ _id }) => _id);

  return [...regionPosts, ...posts.filter(({ _id }) => !regionNewsIds.includes(_id))];
};

export default pinRegionPosts;
