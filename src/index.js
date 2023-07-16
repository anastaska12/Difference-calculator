/* eslint-disable no-restricted-syntax */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import parser from './parsers.js';
import makeTree from './buildTree.js';
import checkFormat from './formaters/index.js';

const getAbsolutPath = (filepath) => path.resolve('__fixtures__', filepath);

const getFormat = (fileName) => {
  const format = path.extname(fileName).slice(1);
  return format;
};

const fileContent = (filepath) => {
  const content = readFileSync(getAbsolutPath(filepath), 'utf-8');
  return content;
};

const dataFile = (file) => {
  const content = fileContent(file);
  const format = getFormat(file);
  const parsedFile = parser(content, format);
  return parsedFile;
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
 const data1 = dataFile(filepath1);
 const data2 = dataFile(filepath2);
 const tree = makeTree(data1, data2);
 const result = checkFormat(tree, format);
 return result;
};
export default genDiff;
