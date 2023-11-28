/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  };


  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else if (this.size === 1) {
      this.first.next = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    };
  };


  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    let removedNode
    if (this.first === null) {
      throw new Error("Queue is empty! Canont dequeue from empty queue. Call enqueue to fill queue.");
    } else {
      if (this.size - 1 === 0) {
        removedNode = this.first;
        this.first = null;
        this.last = null;
        this.size = 0;
        return removedNode.val;
      } else {
        removedNode = this.first;
        this.first = this.first.next;
        this.size--;
        return removedNode.val;
      };
    };
  };


  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (this.first === null) {
      throw new Error("Queue is empty! Canont peek into an empty queue. Call enqueue to fill queue.");
    } else {
      let peekedNodeVal = this.first.val;
      return peekedNodeVal;
    };
  };


  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    };
  };
};

module.exports = Queue;