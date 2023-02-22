function module () {
  let a = 10
  let b = 0

  function fn1() {
    a++
    console.log(a)
  }

  function fn2() {
    b--
    console.log(b)
  }

  return {
    fn1: fn1,
    fn2: fn2
  }
}

(function module2() {
  let a = 10
  let b = 2

  function fn1() {
    a++
    console.log(a)
  }

  function fn2() {
    b--
    console.log(b)
  }

  window.fn1 = fn1
  window.fn2 = fn2
})()


