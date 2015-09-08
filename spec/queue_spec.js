'use strict'

describe('Queue', function() {
  var Queue = require('./../app/stores/queue.js'),
      queue;

  beforeEach(function() {
    queue = new Queue();
  });

  describe('initialize', function() {
    it('should initialize a queue', function() {
      expect(queue instanceof Queue).toBe(true);
    });
  });

  describe('.push', function() {
    beforeEach(function() {
      queue.push(1);
      queue.push(2);
    });

    it('should add items to the queue', function() {
      expect(queue.values.length).toEqual(2);
    });

    it('should return the array', function() {
      expect(queue.push(1) instanceof Array).toBe(true);
    });

    it('should add the item to the beginning of the array', function() {
      queue.push(1);
      queue.push(2);
      expect(queue.values[0]).toEqual(2)
    });
  });

  describe('.pop', function() {
    beforeEach(function() {
      queue.values = [1,2,3];
    });

    it('should remove items from the queue', function() {
      expect(queue.pop()).toEqual(3);
      expect(queue.values.length).toEqual(2);
    });

    it('should remove items from the end of the queue', function() {
      queue.pop();
      expect(queue.values.indexOf(3)).toEqual(-1);
    });
  });
});
