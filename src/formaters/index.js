import stylish from './formatTree.js';
import plain from './plain.js';

const checkFormat = (tree, format) => {
  if (format === 'stylish') {
    return stylish(tree);
  }
  if (format === 'json') {
    return JSON.stringify(tree);
  }
  if (format === 'plain') {
    return plain(tree);
  }
  return 'Type is not supported';
};
export default checkFormat;
