// Q3 - Implement setInterval Using setTimeout
function mySetInterval(callback, delay) {
  let timerId;
  let isCleared = false;

  function repeat() {
    if (isCleared) return;
    callback();
    timerId = setTimeout(repeat, delay);
  }

  timerId = setTimeout(repeat, delay);

  return {
    id: timerId,
    clear: function () {
      isCleared = true;
      clearTimeout(timerId);
    }
  };
}

function myClearInterval(intervalObj) {
  intervalObj.clear();
}
