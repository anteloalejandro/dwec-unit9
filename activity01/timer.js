export function timer(time) {
  const promise = new Promise((onresolve, onreject) => {
    // Create a timer that resolves the promise once the specified time passes
    var tmp = setTimeout(() => {
      onresolve('Time elapsed: '+(time/1000)+'s')
      clearTimeout(tmp)
    }, time)

    // This timer won't finish before the last one,
    // but if it did, it the promise would be rejected
    var wtf = setTimeout(() => {
      onreject("Time's glitched, it must've been written in JavaScript")
      clearTimeout(wtf)
    }, time*2)
  })

  return promise
}
