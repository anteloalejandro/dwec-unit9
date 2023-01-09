export function timer(time) {
  const promise = new Promise((onresolve, onreject) => {
    // Create a timer that resolves the promise once the specified time passes
    var tmp = setTimeout(() => {
      clearTimeout(wtf)
      onresolve('Time elapsed: '+(time/1000)+'s')
    }, time)

    // This timer won't finish before the last one,
    // but if it did, it the promise would be rejected
    var wtf = setTimeout(() => {
      clearTimeout(tmp)
      onreject("Time's glitched, it must've been written in JavaScript")
    }, time*2)
  })

  return promise
}
