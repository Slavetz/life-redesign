import groupBy from 'lodash.groupby';

const defaultPriorityGroups = {
  POST_PRIORITY_1A: [],
  POST_PRIORITY_2A: [],
  POST_PRIORITY_3A: [],
  POST_PRIORITY_1B: [],
  POST_PRIORITY_2B: [],
  POST_PRIORITY_1C: [],
  POST_PRIORITY_2C: [],
};

const sortPostsByPriority = (data) => {
  if (data.length === 0) return data;

  const postsPriorityGroups = groupBy(data, 'priority');

  Object.keys(defaultPriorityGroups).forEach((priorityKey) => {
    if (!postsPriorityGroups[priorityKey]) {
      postsPriorityGroups[priorityKey] = defaultPriorityGroups[priorityKey];
    }
  });

  return postsPriorityGroups;
};

/**
 *
 *
 * videos
 *
 *
 * */

// const emptyVideo = {
//   title: '',
//   description: '',
//   cover: '',
// };

const sortMainVideosByPriorityWithEmpty = (videos = []) => {
  const sortedVideos = Array(10);
  // const sortedVideos = Array(10).fill(emptyVideo);

  videos.forEach((video) => {
    if (video.priority > 0 && video.priority < 11) {
      sortedVideos[video.priority - 1] = video;
    }
  });

  return sortedVideos;
};

export { sortPostsByPriority, sortMainVideosByPriorityWithEmpty };
