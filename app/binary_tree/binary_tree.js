'use strict';

module.exports = (function() {
  var BinaryTree,
      Node,
      tail,
      currentNode,
      recurseTree,
      node;

  Node = function(data) {
    this.data   = data;
    this.right  = null;
    this.left   = null;
    this.parent = null;
  };

  BinaryTree = function(rootValue) {
    this.root = new Node(rootValue)
  };

  /*
   * Traverses through the tree and finds the proper node
   * to append to.
   *
   * Params
   *  - Integer rootValue
   * Returns
   *  - Node || false
   */

  BinaryTree.prototype.findTailFor = function(nodeValue) {
    recurseTree = function(currentNode, nodeValue) {
      if(nodeValue < currentNode.data) {
        if(currentNode.left) {
          return recurseTree(currentNode.left, nodeValue);
        }
        else {
          return currentNode;
        }
      }
      else if(nodeValue > currentNode.data) {
        if(currentNode.right) {
          return recurseTree(currentNode.right, nodeValue);
        }
        else {
          return currentNode;
        }
      }
      else if (nodeValue === currentNode.data) {
        return currentNode;
      }
      else {
        return false;
      }
    };

    return recurseTree(this.root, nodeValue);
  };

  /*
   * Adds a new value to the tree
   *
   * Params
   *  - Integer nodeValue
   * Returns
   *  - Node || false
   */

  BinaryTree.prototype.add = function(nodeValue) {
    node = new Node(nodeValue);
    tail = this.findTailFor(nodeValue);
    node.parent = tail;

    if(node.data > tail.data) {
      tail.right = node;
      return node;
    }
    else if (node.data < tail.data) {
      tail.left = node;
      return node;
    }

    return false;
  };

  return BinaryTree;
})();
