/// Q5 - Countdown Timer
function createCountdown(seconds, onTick, onComplete) {
  // Private state
  let remaining = seconds;
  let endTime = Date.now() + seconds * 1000;
  let timerId = null;
  let paused = false;

  function tick() {
    if (paused) return;

    // Date.now() based calculation prevents drift ✅
    remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    onTick(remaining);

    if (remaining <= 0) {
      clearInterval(timerId);
      onComplete();
    }
  }

  timerId = setInterval(tick, 1000);

  return {
    pause() {
      paused = true;
      clearInterval(timerId);
      console.log(`Paused at ${remaining} seconds`);
    },
    resume() {
      if (!paused) return;
      paused = false;
      endTime = Date.now() + remaining * 1000; // recalculate from where we paused
      timerId = setInterval(tick, 1000);
      console.log("Resumed!");
    }
  };
}
