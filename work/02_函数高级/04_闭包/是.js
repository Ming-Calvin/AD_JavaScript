function fn() {
  let a = 10

  function fn1() {
    a++
    console.log(a)
  }

  return fn1
}

let fun = fn()