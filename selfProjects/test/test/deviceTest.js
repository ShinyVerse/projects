var assert = require('chai').assert;
var device = require('../device');


describe('checking response', function(){
    it('should return string from array', function(){
        assert.equal(device(1, "!false. It's funny because it's true"), "!false. It's funny because it's true");
    });
});
