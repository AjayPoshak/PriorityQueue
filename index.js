const ArrayBasedImplementation = require("./ArrayBasedImplementation.js");
const HeapBasedImplementation = require("./HeapBasedImplementation.js");

class PriorityQueue {
  constructor({ implementation = "heap" }) {
    this.implementation = implementation;
    if (implementation === "array") {
      return new ArrayBasedImplementation();
    } else {
      return new HeapBasedImplementation();
    }
  }
}

module.exports = PriorityQueue;
