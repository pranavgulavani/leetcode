/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;
  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return (counter -= 1);
    },
    reset: () => (counter = init),
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); //5
console.log(counter.decrement()); // 4
