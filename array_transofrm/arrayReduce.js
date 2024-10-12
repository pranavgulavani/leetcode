/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init = 0) {
  if (nums.length === 0) return init;
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
};

reduce([1, 2, 3], (acc, cur) => acc + cur);

const x = [1, 2, [3, 4]];
