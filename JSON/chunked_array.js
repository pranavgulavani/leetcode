/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let newArr = [];
  let start = 0;
  let end = size;
  for (let i = 0; i <= Math.round(arr.length / size); i++) {
    let subarr = arr.slice(start, end);
    if (subarr.length > 0) {
      newArr.push(subarr);
      start = end;
      end = start + size;
    }
  }
  return newArr;
};

var chunk1 = function (arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
const arr = [1, 2, 3, 45, 67];

console.log(chunk1(arr, 2));
