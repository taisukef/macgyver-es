import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { setup } from "./setup/index.js";

const module = {
  exports: {}
};
const s = setup(module)

var invalid = s.invalid
var valid = s.valid

var r = Math.random()

function returns (_r) {
  return _r || r
}

valid('returns() returns correct', function (mac) {
  var rs = mac(returns).returns(r)
  rs()
})

invalid('returns(), but return different', function (mac) {
  var rs = mac(returns).returns('hello')
  rs()
})

//if passed a function, use that function as an assertion
//not to test equal

valid('returns() with assertion', function (mac) {
  var rs = mac(returns).returns(function (v) {
    assertEquals(typeof v, "number")
  })
  rs()
})

invalid('returns() with failing assertion', function (mac) {
  var rs = mac(returns).returns(function (v) {
    assertEquals(typeof v, "number")
  })
  rs('hello')
})

Object.values(module.exports).forEach(f => f());
