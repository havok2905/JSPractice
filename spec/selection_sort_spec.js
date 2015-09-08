'use strict'

describe('SelectionSort', function() {
  var selectionSort = require('./../app/sorts/selection_sort.js'),
      sorted = [0,1,2,3,4,5,6,7],
      unsorted = [7,5,3,2,1,4,6,0];

  it('should sort an array', function() {
    expect(selectionSort(unsorted)).toEqual(sorted);
  });
});
