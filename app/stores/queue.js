'use strict';

module.exports = (function() {
  var Queue = function() {
    this.values = [];
  };

  /*
   * Adds a new value to the beginning of the queue
   *
   * Params
   *  - Any val
   * Returns
   *  - Array
   */

  Queue.prototype.push = function(val) {
    this.values.unshift(val);
    return this.values;
  };

  /*
   * Removes the last itm on the queue and
   * returns it.
   *
   * Returns
   *  - Any
   */

  Queue.prototype.pop = function() {
    return this.values.pop();
  };

  return Queue;
})();
