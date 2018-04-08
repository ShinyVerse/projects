var assert = require('assert');
// var qm = require("../QuestionMarks/main.js");
var Abcheck = require("../ABCheck/main.js");

// describe("QuestionMarks", function() {
//
//   it("sum 10 and 3 question marks should return true", function() {
//     //assert.equal(1+2, 3);
//     assert.equal(qm.questionMarks("abc2???8d"), true)
//   })
//
//   it("no pairs sum 10 should return false", function () {
//     assert.equal(qm.questionMarks("abc3?a6"), false)
//   })
//
//   it("sum 10 and 1 question mark should return false", function() {
//     assert.equal(qm.questionMarks("abc2?8d"), false)
//   })
//
// })


describe("AbCheck", function(){
  it("single occurence. a and b letter have three filled spaces between them.", function(){
    assert.equal(Abcheck.ABCheck("a123b"), true)
  })
  it("double occurence, but only one a and b within 3 spaces of each other.", function(){
    assert.equal(Abcheck.ABCheck("fdasdffdfdfdfba123b"), true)
  })
  it("one occurence, doesn't have 3 spaces between a and b", function(){
    assert.equal(Abcheck.ABCheck("dgsfdg!!ga3b"), false)
  })
})


//to run a test:
//package.json with "scripts": {
  //   "test": "mocha"
  // }
  //is in place.
//make sure var assert = require('assert'); is at the top.
//var name = require("pathway");
//describe("", function(){
// it("description of event.", function(){
//   assert.equal(var-name.function-name("test to pass"), result : true false)
// })
// })
//
// Within a file of function wanting to test:
// var myFunctions at the top.
// myFunctions.FUNCTIONNAME = function("whatever to pass"){...}
// at bottom:
// module.exports = myFunctions.
