// Q4 - Sequential Task Runner (Async + Promises)
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSequential(tasks, delay) {
  const results = [];

  for (const task of tasks) {       // for...of (NOT forEach - forEach ignores await)
    const result = await task();    // waits for task, stops if any task throws error
    results.push(result);
    await wait(delay);              // waits delay ms before next task
  }

  return results;                   // async auto-wraps this in a Promise
}
