/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (value) {
      if (val === value) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (value) {
      if (val !== value) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};
try {
  console.log(expect);
  console.log(expect(5).toBe(null));
} catch (error) {
  console.error(error.name, error.message, error.toString());
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
