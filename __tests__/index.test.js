import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('compaer tree', () => {
  const actual = genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'));
  expect(actual).toEqual(readFile('expect-stylish.txt'));

  const actual1 = genDiff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yaml'));
  expect(actual1).toEqual(readFile('expect-stylish.txt'));

  const actual2 = genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'), 'stylish');
  expect(actual2).toEqual(readFile('expect-stylish.txt'));

  const actual3 = genDiff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yaml'), 'stylish');
  expect(actual3).toEqual(readFile('expect-stylish.txt'));

  const actual4 = genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.yaml'), 'plain');
  expect(actual4).toEqual(readFile('expect-plain.txt'));

  const actual5 = genDiff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yaml'), 'plain');
  expect(actual5).toEqual(readFile('expect-plain.txt'));

  const actual6 = genDiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'), 'json');
  expect(actual6).toEqual(readFile('expect-JSON.txt'));

  const actual7 = genDiff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yaml'), 'json');
  expect(actual7).toEqual(readFile('expect-JSON.txt'));
});
