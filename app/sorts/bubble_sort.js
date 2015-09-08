'use strict';

module.exports = (function() {

  function swap(values, firstIndex, secondIndex) {
    var chached = values[firstIndex];
    values[firstIndex] = values[secondIndex];
    values[secondIndex] = chached;
  }

  /*
   * Bubble Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  return function(values) {
    var cached,
        swapping = true;

    // While no value swapping happens
    while(swapping) {
      swapping = false;

      // Go through each value
      for(var x=0; x<values.length; x++) {
        
        // Swap values if the left is more than the right
        if(values[x] > values[x+1]) {
          swap(values, x, x+1);
          swapping = true;
        }
      }
    }

    return values;
  };

})();
