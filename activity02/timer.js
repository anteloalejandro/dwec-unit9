/**
 * @param {Number} time
 * @param {HTMLElement} element
 * @param {String} output
 */
function timer(time, element, output = 'Time elapsed: '+(time/1000)+'s') {
  element.textContent = 'Loading...'
  const promise = new Promise((onresolve, onreject) => {
    // Create a timer that resolves the promise once the specified time passes
    var tmp = setTimeout(() => {
      onresolve(output)
      clearTimeout(tmp)
    }, time)

    // This timer won't finish before the last one,
    // but if it did, it the promise would be rejected
    var wtf = setTimeout(() => {
      onreject("Time's glitched, it must've been written in JavaScript")
      clearTimeout(wtf)
    }, time*2)
  })

  // Change the contents of the h1 element when the timer finishes
  const handler = result => { element.textContent = result }
  promise
    .then(handler)
    .catch(handler)
}

/**
 * @param {Number} iterations
 * @param {HTMLElement} element
 * @param {function} callbackfn
 * @param {Number} interval
 */
function countdown(iterations, element, callbackfn, interval = 1000) {
  const promise = new Promise((onresolve) => {
    // Count down from the value of iterations,
    // changing the value of the element on the process
    element.textContent = iterations
    var tmp = setInterval(() => {
      iterations--
      element.textContent = iterations
      // After enough iterations, the countdown stops
      if (iterations <= 0) {
        clearInterval(tmp)
        onresolve()
      }
    }, interval)
  })

  // Run the callback function once the promise resolves
  promise.then(callbackfn)
}

export {
  timer,
  countdown
}
