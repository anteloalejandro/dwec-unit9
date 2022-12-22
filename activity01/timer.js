export function timer(time) {
  const promise = new Promise((onresolve, onreject) => {
    var tmp = setTimeout(() => {
      onresolve('Time elapsed: '+(time/1000)+'s')
      clearTimeout(tmp)
    }, time)

    var wtf = setTimeout(() => {
      onreject("Time's glitched, it must've been written in JavaScript")
      clearTimeout(wtf)
    }, time*2)
  })

  return promise
}
