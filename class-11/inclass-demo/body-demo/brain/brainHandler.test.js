'use strict';

const handleBrain = require('./brainHandler');

// 2 params to mock
// 1.  path to module)
// 2. callback that returns an object, because the eventPool is an object (with two methods)

jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  }
});

describe('Handle Brain Test', () => {
  console.log = jest.fn();

  test('lag and emit DILATION event to close pupils', () => {
    handleBrain({brightness: 55});
    expect(console.log).toHaveBeenCalledWith('Brain: Brightness changed!! ', {brightness: 55});
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'close');
  });

  test('log and emit DILATION event to "open" pupils', () => {
    handleBrain({brightness: 45});
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'open');

  })

})
