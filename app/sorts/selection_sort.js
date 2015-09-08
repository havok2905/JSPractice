'use strict';

module.exports = (function() {

  function swap(values, firstIndex, secondIndex) {
    var chached = values[firstIndex];
    values[firstIndex] = values[secondIndex];
    values[secondIndex] = chached;
  }

  /*
   * Selection Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  return function(values) {
    var minIndex,
        cached;

    // Go through each value
    for(var x=0; x<values.length; x++) {

      // Hunt for where the min value is
      minIndex = x;
      for(var y=x; y<values.length; y++) {
        if(values[y] < values[minIndex]) {
          minIndex = y;
        }
      }

      // swap values
      swap(values, x, minIndex);
    }

    return values;
  };

})();
