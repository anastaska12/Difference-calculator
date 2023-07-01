import { readFileSync } from "node:fs";
import _ from "lodash";
import path from "path";

const resolve = (fileName) => path.resolve("__fixtures__", fileName);

const genDiff = (filepath1, filepath2) => {
  const data1 = readFileSync(resolve(filepath1), "utf-8");
  const data2 = readFileSync(resolve(filepath2), "utf-8");

  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);

  const keys1 = _.keys(dataParse1);
  const keys2 = _.keys(dataParse2);
  const allKeys = [...keys1, ...keys2];

  const diff = {};

  for (const key of allKeys) {
    switch (true) {
      case !keys1.includes(key):
        diff[`+ ${key}`] = dataParse2[key];
        break;
      case !keys2.includes(key):
        diff[`- ${key}`] = dataParse1[key];
        break;
      case dataParse1[key] !== dataParse2[key]:
        diff[`- ${key}`] = dataParse1[key];
        diff[`+ ${key}`] = dataParse2[key];
        break;
      default:
        break;
    }
  }

  return diff;
};
export default genDiff;
