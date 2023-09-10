'use strict';

const leftJoin = require('./Leftjoin');
const {synMap, antMap} = require('./test-samples');

describe('Test for Leftjoin function', () => {
  test('Test result array', () => {
    expect(leftJoin(synMap, antMap)).toEqual([
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'fond', 'enamored', 'averse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'wrath', 'anger', 'delight' ]
    ]);
  });
});
