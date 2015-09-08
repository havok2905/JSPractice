'use strict';

module.exports = (function() {
  var p;

  function middle(low, high) {
    return Math.floor((low + high) / 2);
  }

  function swap(values, firstIndex, secondIndex) {
    var chached = values[firstIndex];
    values[firstIndex] = values[secondIndex];
    values[secondIndex] = chached;
  }

  function partition(values, low, high, pivot) {
    var lowIndex = low,
        highIndex = high;

    while (lowIndex <= highIndex) {
      while(values[lowIndex] < pivot) {
        lowIndex++;
      }

      while(values[highIndex] > pivot) {
        highIndex--;
      }

      if(lowIndex <= highIndex) {
        swap(values, lowIndex, highIndex);
        lowIndex++;
        highIndex--;
      }
    }

    return lowIndex;
  }

  /*
   * Quick Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  function quickSort(values, low, high) {
    if(low < high) {
      p = partition(values, low, high, middle(low, high));
      quickSort(values, low, p - 1);
      quickSort(values, p, high);
    }

    return values;
  }

  return quickSort;
})();
