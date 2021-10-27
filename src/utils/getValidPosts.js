import { isValidCompiledPostList } from 'schemas/compiledPost';

/**
 *
 * @param posts {[]}
 * @returns {[]}
 */
export const getValidPosts = (posts = []) =>
  posts.reduce((validPosts, post) => {
    const validPost = isValidCompiledPostList(post);
    if (validPost) {
      validPosts.push(validPost);
    }
    return validPosts;
  }, []);
