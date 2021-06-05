import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { setup } from "./setup/index.js";

const module = {
  exports: {}
};
const s = setup(module)

var invalid = s.invalid
var valid = s.valid

function throwIt () {
  throw new Error('TEST ERROR')
}

function noop () {}

valid('throws()', function (mac) {
  var t = mac(throwIt).throws()
  t()
})

invalid('throws()', function (mac) {
  var t = mac(noop).throws(function (err, threw) {
      console.log(err, threw)
      if(!threw) throw new Error('DID NOT THROW')
    })
  t()
})

valid('throwing skips returns', function (mac) {
  var returnChecked = false
  var t = mac(throwIt)
    .returns(function () {
      returnChecked = true
    })
    .throws(function (err, threw) {
      console.log('throws', err, threw)
    })

  t()
  assertEquals(returnChecked, false)
})

Object.values(module.exports).forEach(f => f());
