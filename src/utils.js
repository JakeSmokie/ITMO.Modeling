export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function debounce(f, interval) {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);

    return new Promise(resolve =>
      timer = setTimeout(
        () => resolve(f(...args)),
        interval,
      )
    );
  };
}

export function truncateNumber(x, digits = 2) {
  const pow = Math.pow(10, digits);
  return Math.round(x * pow + Number.EPSILON) / pow;
}

Array.prototype.groupBy = function (f) {
  return Object.entries(this.reduce((rv, x) => {
    (rv[f(x)] = rv[f(x)] || []).push(x);
    return rv;
  }, {}));
};

export function roundBy(x, n) {
  return Math.floor(x / n) * n;
}

export function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}