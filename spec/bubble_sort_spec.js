'use strict'

describe('BubbleSort', function() {
  var bubbleSort = require('./../app/sorts/bubble_sort.js'),
      sorted = [0,1,2,3,4,5,6,7],
      unsorted = [7,5,3,2,1,4,6,0];

  it('should sort an array', function() {
    expect(bubbleSort(unsorted)).toEqual(sorted);
  });
});
