/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else {
    return Object.keys(obj).length === 0;
  }
};

var isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) return true;
  return false;
};
console.log(isEmpty([1, 2, 4]));
console.log(isEmpty([]));
console.log(isEmpty({ x: 1, y: 2 }));
console.log(isEmpty({}));
