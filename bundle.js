(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var StringReverse = require('./strings/string_reverse.js');
var RemoveDuplicates = require('./strings/remove_duplicates.js');
var LinkedList = require('./linked_lists/linked_list.js');
var BinaryTree = require('./binary_tree/binary_tree.js');
var Queue = require('./stores/queue.js');
var Stack = require('./stores/stack.js');
var bubbleSort = require('./sorts/bubble_sort.js');
var insertionSort = require('./sorts/insertion_sort.js');
var selectionSort = require('./sorts/selection_sort.js');

},{"./binary_tree/binary_tree.js":1,"./linked_lists/linked_list.js":3,"./sorts/bubble_sort.js":4,"./sorts/insertion_sort.js":5,"./sorts/selection_sort.js":6,"./stores/queue.js":7,"./stores/stack.js":8,"./strings/remove_duplicates.js":9,"./strings/string_reverse.js":10}],3:[function(require,module,exports){
module.exports = (function() {

  /*
   * Private node class to hold values and pointers
   * to the next and prev nodes.
   *
   * Params
   *  String value
   *  Node previous
   *  Node next
   * Returns
   *  void
   */

  function Node(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }

  /*
   * Data Structure Class. Holds information on the current, head, and tail nodes.
   * Can remove, delete, cut, and traverse through nodes.
   *
   * Params
   *  String value
   * Returns
   *  Node
   */

  function LinkedList(value) {
    this.current = new Node(value, null, null);
    this.head = this.current;
    this.tail = this.current;
  }

  /*
   * Sets the current node back to the beginning of the list
   *
   * Returns
   *  Node
   */

  LinkedList.prototype.reset = function() {
    this.current = this.head;
    return this.current;
  }

  /*
   * Adds a new node to the end of the list
   *
   * Params
   *  String value
   * Returns
   *  Node
   */

  LinkedList.prototype.add = function(value) {
    var node = new Node(value, this.tail, null);
    this.tail.next = node;
    this.tail = node;
    return node;
  };

  /*
   * Moves the current node forward one
   *
   * Returns
   *  Node
   */

  LinkedList.prototype.next = function() {
    this.current = this.current.next;
    return this.current;
  };

  /*
   * Moves the current node back one
   *
   * Returns
   *  Node
   */

  LinkedList.prototype.previous = function() {
    this.current = this.current.previous;
    return this.current;
  };

  /*
   * Removes a node from the list
   *
   * Returns
   *  Node
   */

  LinkedList.prototype.delete = function() {
    var previous = this.current.previous;
    var next = this.current.next;

    previous.next = next;
    next.previous = previous;

    this.current = previous;

    return this.current;
  };

  /*
   * insert a node in the middle of the list
   *
   * Returns
   *  Node
   */

  LinkedList.prototype.insert = function(value) {
    var next = this.current.next;
    var previous = this.current;

    this.current = new Node(value, previous, next);

    next.previous = this.current;
    previous.next = this.current;

    return this.current;
  };


  return LinkedList;
}());

},{}],4:[function(require,module,exports){
'use strict';

module.exports = (function() {

  /*
   * Bubble Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  return function(values) {
    var cached,
        swapping = true;

    // While no value swapping happens
    while(swapping) {
      swapping = false;

      // Go through each value
      for(var x=0; x<values.length; x++) {
        cached = values[x];

        // Swap values if the left is more than the right
        if(values[x] > values[x+1]) {
          values[x] = values[x+1];
          values[x+1] = cached;
          swapping = true;
        }
      }
    }

    return values;
  };

})();

},{}],5:[function(require,module,exports){
'use strict';

module.exports = (function() {

  /*
   * Insertion Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  return function(values) {
    var cached,
        index;

    // Go through each value
    for(var x=0; x<values.length; x++) {
      index = x;
      cached = values[index];

      // Make room for the lower value
      while(index > 0 && cached < values[index-1] ) {
        values[index] = values[index-1]
        index--;
      }

      // Insert the low value
      values[index] = cached;
    }

    return values;
  };

})();

},{}],6:[function(require,module,exports){
'use strict';

module.exports = (function() {

  /*
   * Selection Sort
   *
   * Params
   *  - Array values
   * Returns
   *  - Array
   */

  return function(values) {
    var minIndex,
        cached;

    // Go through each value
    for(var x=0; x<values.length; x++) {

      // Hunt for where the min value is
      minIndex = x;
      for(var y=x; y<values.length; y++) {
        if(values[y] < values[minIndex]) {
          minIndex = y;
        }
      }

      // swap values
      cached = values[x];
      values[x] = values[minIndex];
      values[minIndex] = cached;
    }

    return values;
  };

})();

},{}],7:[function(require,module,exports){
'use strict';

module.exports = (function() {
  var Queue = function() {
    this.values = [];
  };

  /*
   * Adds a new value to the beginning of the queue
   *
   * Params
   *  - Any val
   * Returns
   *  - Array
   */

  Queue.prototype.push = function(val) {
    this.values.unshift(val);
    return this.values;
  };

  /*
   * Removes the last itm on the queue and
   * returns it.
   *
   * Returns
   *  - Any
   */

  Queue.prototype.pop = function() {
    return this.values.pop();
  };

  return Queue;
})();

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}]},{},[2]);
