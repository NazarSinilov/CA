function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      try {
        const result = fn(...args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

function multiply(a, b) {
  return a * b;
}

const promisifiedMultiply = promisify(multiply);

promisifiedMultiply(5, 10).then(result => console.log(result));
