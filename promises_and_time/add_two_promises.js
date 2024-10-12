/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (resolve, reject) => {
    const val1 = await promise1;
    const val2 = await promise2;
    resolve(val1 + val2);
    reject("Somthing went wrong !");
  });
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));

const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((val) => console.log(val)); // 4
