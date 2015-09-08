'use strict'

describe('StringReverse', function() {
  var StringReverse = require('./../app/strings/string_reverse.js');

  var evenString, evenStringReversed, oddString, oddStringReversed;

  beforeEach(function() {
    evenString = 'abcd';
    oddString  = 'abcde';
    
    evenStringReversed = 'dcba';
    oddStringReversed  = 'edcba';
  });

  describe('reverse', function() {
    it('should reverse strings', function() {
      expect(StringReverse.reverse(evenString)).toEqual(evenStringReversed);
      expect(StringReverse.reverse(oddString)).toEqual(oddStringReversed);
    });
  });

  describe('functionalReverse', function() {
    it('should reverse strings', function() {
      expect(StringReverse.functionalReverse(evenString)).toEqual(evenStringReversed);
      expect(StringReverse.functionalReverse(oddString)).toEqual(oddStringReversed);
    });
  });
});
