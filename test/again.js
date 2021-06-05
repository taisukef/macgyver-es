import { setup } from "./setup/index.js";

const module = {
  exports: {}
};
const s = setup(module)

console.log(s);
var invalid = s.invalid
var valid = s.valid

function hello () {
  console.log('hello')
}

function goodbye () {
  console.log('byebye')
}

valid('once() then again()', function (mac) {
  var hi = mac(hello).once()
  hi()
  hi.again()
  hi()
})

invalid('once(), called, again(), but not called', function (mac) {
  var hi = mac(hello).once()
  hi()
  hi.again()
//  hi.isCalled(null, null, 1)
})

valid('once(), then retracted again(-1)', function (mac) {
  var hi = mac(hello).once()
  hi.again(-1)
//  hi.isCalled(null, null, 1)
})

Object.values(module.exports).forEach(f => f());
