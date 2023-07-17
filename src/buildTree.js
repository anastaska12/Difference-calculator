import _ from 'lodash';

const makeTree = (file1, file2) => {
  const key1 = _.keys(file1);
  const key2 = _.keys(file2);
  const keys = _.sortBy(_.union(key1, key2));

  const result = keys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { name: key, children: makeTree(file1[key], file2[key]), type: 'nested' };
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      return { name: key, value: file1[key], type: 'deleted' };
    }
    if (_.has(file2, key) && !_.has(file1, key)) {
      return { name: key, value: file2[key], type: 'added' };
    }
    if ((file1[key] !== file2[key])) {
      return {
        name: key, value1: file1[key], value2: file2[key], type: 'changed',
      };
    }
    return { name: key, value: file1[key], type: 'unchanged' };
  });
  return result;
};
export default makeTree;
