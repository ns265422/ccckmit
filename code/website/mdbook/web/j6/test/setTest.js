/* eslint-disable no-undef */
// var assert = require('chai').assert
var j6 = require('../lib/j6')
var assert = require('assert')
var eq = assert.equal

describe('Set', function () {
  var A = new j6.Set([1, 2, 3, 4, 5])
  var B = new j6.Set([1, 3, 5, 7])
  describe('Set.has(e)', function () {
    it('Default Set', function () {
      eq(true, j6.Float.has(3.5))
      eq(false, j6.Integer.has(3.5))
      eq(false, j6.Even.has(3))
      eq(true, j6.Odd.has(3))
      eq(false, j6.Prime.has(6))
      eq(true, j6.Prime.has(5))
    })
    it('Set Operation', function () {
      var UAB = j6.union(A, B)
      eq(true, UAB.has(3))
      eq(false, UAB.has(8))
      var IAB = j6.intersection(A, B)
      eq(true, IAB.has(3))
      eq(false, IAB.has(2))
      var DAB = j6.difference(A, B)
      eq(false, DAB.has(3))
      eq(true, DAB.has(2))
      eq(false, j6.Even.has(3))
      eq(true, j6.Odd.has(3))
      eq(false, j6.Prime.has(6))
      eq(true, j6.Prime.has(5))
      var SAB = j6.symmetricDifference(A, B)
      eq(false, SAB.has(3))
      eq(true, SAB.has(2))
      var EP = j6.union(j6.Even, j6.Prime)
      eq(true, EP.has(3))
      eq(true, EP.has(8))
      eq(false, EP.has(9))
      var CEO = j6.cartesianProduct(j6.Even, j6.Odd)
      eq(true, CEO.has([2, 3]))
      eq(false, CEO.has([2, 4]))
//      eq(true, j6.subSet(new j6.Set([1, 3]), A))
//      eq(false, j6.subSet(new j6.Set([1, 7]), A))
    })
  })
})
