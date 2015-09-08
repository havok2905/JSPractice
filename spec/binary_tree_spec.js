'use strict'

describe('BinaryTree', function() {

  var BinaryTree = require('./../app/binary_tree/binary_tree.js'),
      binaryTree,
      rootValue = 10;

  beforeEach(function() {
    binaryTree = new BinaryTree(rootValue);
  });

  describe('initialize', function() {
    it('should initialize a binary tree', function() {
      expect(binaryTree instanceof BinaryTree).toBe(true);
    });

    it('should have a root if a value is passed', function() {
      expect(binaryTree.root.data).toEqual(rootValue);
    });
  });

  describe('.add', function() {
    it('should add a new node to the tree in the correct place', function() {
      binaryTree.add(5);
      binaryTree.add(12);
      expect(binaryTree.root.right.data).toEqual(12);
      expect(binaryTree.root.left.data).toEqual(5);
    });
  });

  describe('findTailFor', function() {
    it('should find the node you are looking for in the tree', function() {
      // Add a bunch of random values to build a somewhat interesting tree
      binaryTree.add(5);
      binaryTree.add(12);
      binaryTree.add(6);
      binaryTree.add(9);
      binaryTree.add(100);

      // Check against all nodes on the tree
      expect(binaryTree.findTailFor(101).data).toEqual(100);
      expect(binaryTree.findTailFor(80).data).toEqual(100);
      expect(binaryTree.findTailFor(11).data).toEqual(12);
      expect(binaryTree.findTailFor(8).data).toEqual(9);
      expect(binaryTree.findTailFor(7).data).toEqual(9);
      expect(binaryTree.findTailFor(4).data).toEqual(5);
    });
  });
});
