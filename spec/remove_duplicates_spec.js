'use strict'

describe('RemoveDuplicates', function() {
  var RemoveDuplicates = require('./../app/strings/remove_duplicates.js');

  var string, uniqueString;

  beforeEach(function() {
    string = 'aaabbbcccabc';
    uniqueString = 'abc';
  });

  describe('reverse', function() {
    it('should remove duplicates from a string', function() {
      expect(RemoveDuplicates.removeDuplicates(string)).toEqual(uniqueString);
    });
  });
});
