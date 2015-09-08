'use strict';

module.exports = (function() {
  var Stack = function() {
    this.values = [];
  };

  /*
   * Adds a new value to the stack
   *
   * Params
   *  - Any val
   * Returns
   *  - Array
   */

  Stack.prototype.push = function(val) {
    this.values.push(val);
    return this.values;
  };

  /*
   * Removes the last itm on the stack and
   * returns it.
   *
   * Returns
   *  - Any
   */

  Stack.prototype.pop = function() {
    return this.values.pop();
  };

  return Stack;
})();
