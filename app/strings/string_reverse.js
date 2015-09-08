'use strict';

module.exports = (function(){

  /*
   * Reverses a string using string array syntax
   * Params:
   *  String string
   * Returns
   *  String
   */

  function reverse(string) {
    var reversed = '';
    var stringLength = string.length - 1;

    for(var x=stringLength; x>=0; x--) {
      reversed += string[x];
    }

    return reversed;
  };


  /*
   * Reverses a string using non destructive mapping technique
   * Params:
   *  String string
   * Returns
   *  String
   */

  function functionalReverse(string) {
    var charArray = string.split('');
    var charArrayLength = charArray.length - 1;

    return charArray
             .map(function(current, index) {
               return charArray[charArrayLength - index];
             })
             .join('');
  }

  return {
    reverse: reverse,
    functionalReverse: functionalReverse
  };

})();
