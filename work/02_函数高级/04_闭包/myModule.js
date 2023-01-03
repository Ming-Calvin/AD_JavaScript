function myModule() {
  // 私有数据
  var msg = 'AA xm'

  function doSomething () {
    console.log('doSomething ' + msg.toUpperCase())
  }

  function doOtherthing() {
    console.log('doSomething ' + msg.toLowerCase())
  }

  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}
