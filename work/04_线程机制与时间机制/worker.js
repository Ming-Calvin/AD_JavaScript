function fibonacci(n) {
  if (n==1 || n==2) return 1
  return fibonacci(n-1) + fibonacci(n-2)
}

//onmessage 是一个特殊的全局属性，用于定义消息处理程序。使用 let 声明的变量不会被提升到作用域顶部
// var onmessage = function (event) {
//   let num = event.data
//   console.log('分线程收到数据:' + num)
//
//   // 计算
//   let result = fibonacci(num)
//   postMessage(result)
//   console.log('分线程给主线程发送数据:' + result)
// }

self.addEventListener('message', event => {
  let num = event.data
  console.log('分线程收到数据:' + num)

  console.log(this, 'this')

  // 计算
  let result = fibonacci(num)
  postMessage(result)
  console.log('分线程给主线程发送数据:' + result)
})

