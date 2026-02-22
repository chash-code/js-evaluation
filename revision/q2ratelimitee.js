function createRateLimiter(limit, interval) {
  let count = 0;

  setInterval(() => {
    count = 0;
  }, interval);

  return function (fn) {   // 👈 accept a function
    if (count < limit) {
      count++;
      return fn();         // 👈 execute it
    } else {
      console.log("Rate limit exceeded, please try later");
    }
  };
}
