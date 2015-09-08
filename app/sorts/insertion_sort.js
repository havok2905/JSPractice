'use strict';

module.exports = (function() {

  /*
   * Insertion Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  return function(values) {
    var cached,
        index;

    // Go through each value
    for(var x=0; x<values.length; x++) {
      index = x;
      cached = values[index];

      // Make room for the lower value
      while(index > 0 && cached < values[index-1] ) {
        values[index] = values[index-1]
        index--;
      }

      // Insert the low value
      values[index] = cached;
    }

    return values;
  };

})();
