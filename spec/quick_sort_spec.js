'use strict'

describe('QuickSort', function() {
  var quickSort = require('./../app/sorts/quick_sort.js'),
      sorted = [0,1,2,3,4,5,6,7],
      unsorted = [7,5,3,2,1,4,6,0];

  it('should sort an array', function() {
    expect(quickSort(unsorted, 0, unsorted.length - 1)).toEqual(sorted);
  });
});
