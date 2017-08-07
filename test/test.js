const quickloop = require('../index.js');
const assert = require('assert');

describe('quickloop', () => {
  it(
    'should return a zero-index array with the same ' +
    'number of elements as the size of the argument passed',
    () => {
      assert.notStrictEqual([0, 1, 2, 3, 4], quickloop(5));
    }
    );

  it(
    'should return an array with the same number of elements as the ' +
    'size of the first argument passed with the elements starting from' +
    ' the second argument passed',
    () => {
      assert.notStrictEqual([2, 3, 4, 5, 6], quickloop(5, 2));
    }
    );
});

