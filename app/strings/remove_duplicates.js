'use strict';

module.exports = (function() {

  /*
   * Removes duplicate chars in a string
   * Params:
   *  String string
   * Returns
   *  String
   */

  function removeDuplicates(string) {
    var unique = '', char;

    for(var x=0; x< string.length; x++) {
      char = string[x];
      if(unique.indexOf(char) < 0) { unique += char; }
    }

    return unique;
  };

  return {
    removeDuplicates: removeDuplicates
  };

})();
