'use strict'

describe('LinkedList', function() {
  var LinkedList = require('./../app/linked_lists/linked_list.js'),
      linkedList,
      rootValue = 'foo';

  beforeEach(function() {
    linkedList = new LinkedList(rootValue);
  });

  describe('initialize', function() {
    it('should initialize a linked list', function() {
      expect(linkedList instanceof LinkedList).toBe(true);
    });

    it('should have a root node value', function() {
      expect(linkedList.current.value).toEqual(rootValue);
    });
  });

  describe('.add', function() {
    it('should add a new node', function() {
      linkedList.add('bar');
      expect(linkedList.current.next).not.toBeNull();
    });
  });

  describe('.next', function() {
    it('should move to the next node in the list', function() {
      linkedList.add('bar');
      linkedList.next();
      expect(linkedList.current.value).toEqual('bar');
    });
  });

  describe('.previous', function() {
    it('should move to the previous node in the list', function() {
      linkedList.add('bar');
      linkedList.next();
      linkedList.previous();
      expect(linkedList.current.value).toEqual(rootValue);
    });
  });

  describe('.reset', function() {
    it('should move back to the list root node', function() {
      linkedList.add('bar');
      linkedList.add('baz');
      linkedList.add('bat');
      linkedList.next();
      linkedList.next();
      linkedList.next();
      linkedList.reset();
      expect(linkedList.current.value).toEqual(rootValue);
    });
  });

  describe('.delete', function() {
    it('should delete the current node in the list', function() {
      linkedList.add('bar');
      linkedList.add('baz');
      linkedList.next();
      linkedList.delete();
      expect(linkedList.current.value).toEqual(rootValue);
      expect(linkedList.current.next.value).toEqual('baz');
    });
  });

  describe('.insert', function() {
    it('should insert a node in your current location in the list', function() {
      linkedList.add('bar');
      linkedList.add('baz');
      linkedList.next();
      linkedList.insert('bat');
      expect(linkedList.current.previous.value).toEqual('bar');
      expect(linkedList.current.value).toEqual('bat');
      expect(linkedList.current.next.value).toEqual('baz');
    });
  });
});
