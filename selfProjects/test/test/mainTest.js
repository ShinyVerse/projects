var assert = require('chai').assert;
var first = require('../main');

describe('index', function(){
    it('should get index', function(){
        assert.equal(first(['rabbit', 'fish', 'dog'], "fish"), '1');
    });
});
