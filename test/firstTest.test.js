var assert = require('assert');
const { test, describe, it } = require('mocha');

test('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    })
  })
})