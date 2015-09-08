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
