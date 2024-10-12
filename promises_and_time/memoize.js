/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
}

function memoizeMap(fn) {
  let cache = new Map();
  return function (...args) {
    if (cache.has(args.toString())) {
      console.log(cache);
      return cache.get(args.toString());
    }
    const result = fn(...args);
    cache.set(args.toString(), result);
    console.log(cache);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoizeMap(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
