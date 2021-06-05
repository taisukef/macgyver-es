import { setup } from "./setup/index.js";

const module = {
  exports: {}
};
const s = setup(module)

var invalid = s.invalid
var valid = s.valid

function fun () {
  console.log([].slice.call(arguments))
}


valid('isPassed()', function (mac) {
  var f = mac(fun).isPassed([1])
  f(1)
})

invalid('isPassed()', function (mac) {
  var f = mac(fun).isPassed([1])
  f(2)
})

Object.values(module.exports).forEach(f => f());
