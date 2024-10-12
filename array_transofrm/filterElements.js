/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let result = fn(arr[i], i);
    if (result) newArray.push(arr[i]);
  }
  return newArray;
};

const test = [100, 10, 20, 30];
const fn = function greaterThan10(n, i) {
  return i === 0;
};

console.log(filter(test, fn));
