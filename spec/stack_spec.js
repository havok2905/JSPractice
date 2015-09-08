'use strict'

describe('Stack', function() {
  var Stack = require('./../app/stores/stack.js'),
      stack;

  beforeEach(function() {
    stack = new Stack();
  });

  describe('initialize', function() {
    it('should initialize a stack', function() {
      expect(stack instanceof Stack).toBe(true);
    });
  });

  describe('.push', function() {
    beforeEach(function() {
      stack.push(1);
      stack.push(2);
    });

    it('should add items to the stack', function() {
      expect(stack.values.length).toEqual(2);
    });

    it('should return the array', function() {
      expect(stack.push(1) instanceof Array).toBe(true);
    });

    it('should add items to the end of the array', function() {
      stack.push(1);
      stack.push(2);
      expect(stack.values[0]).toEqual(1);
      expect(stack.values[1]).toEqual(2);
    });
  });

  describe('.pop', function() {
    beforeEach(function() {
      stack.values = [1,2,3];
    });

    it('should remove items from the stack', function() {
      expect(stack.pop()).toEqual(3);
      expect(stack.values.length).toEqual(2);
    });

    it('should remove from the end of the array', function() {
      stack.pop();
      expect(stack.values.indexOf(3)).toEqual(-1);
    });
  });
});
