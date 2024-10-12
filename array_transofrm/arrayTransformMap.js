/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(fn);
    let result = fn(arr[i], i);
    console.log("result", result);
    newArray.push(result);
  }
  return newArray;
};

const number = [10, 20, 30];
//number.map(() => console.log("Hello"));

const test = map(number, (val, i) => console.log(val, i));

console.log(test);
// test();
