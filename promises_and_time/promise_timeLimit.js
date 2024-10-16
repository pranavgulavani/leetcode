/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((reject, resolve) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then((result) => {
          clearTimeout(timer); // Clear the timeout if the function resolves in time
          resolve(result);
        })
        .catch((err) => {
          clearTimeout(timer); // Clear the timeout if the function rejects for another reason
          reject(err);
        });
    });
  };
};
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
