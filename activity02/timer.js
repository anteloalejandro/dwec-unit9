/**
 * @param {Number} time
 * @param {HTMLElement} element
 * @param {String} output
 */
function timer(time, element, output = 'Time elapsed: '+(time/1000)+'s') {
  element.textContent = 'Loading...'
  const promise = new Promise((onresolve, onreject) => {
    var tmp = setTimeout(() => {
      onresolve(output)
      clearTimeout(tmp)
    }, time)

    var wtf = setTimeout(() => {
      onreject("Time's glitched, it must've been written in JavaScript")
      clearTimeout(wtf)
    }, time*2)
  })

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
    element.textContent = iterations
    var tmp = setInterval(() => {
      iterations--
      element.textContent = iterations
      if (iterations <= 0) {
        clearInterval(tmp)
        onresolve()
      }
    }, interval)
  })

  promise.then(callbackfn)
}

export {
  timer,
  countdown
}
