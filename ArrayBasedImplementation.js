class ArrayBasedImplementation {
  constructor() {
    this.internalQueue = [];
  }

  queue(element, priority = 5) {
    this.internalQueue.push({
      element,
      priority
    });
  }

  getHighestPriority() {
    if (this.internalQueue.length === 0) return null;
    let maxPriority = 10;
    for (let i = 0; i < this.internalQueue.length; i++) {
      const { priority } = this.internalQueue[i];
      if (priority <= maxPriority) maxPriority = priority;
    }
    return maxPriority;
  }

  findIndexByPriority(priority) {
    const highestPriorityIndex = this.internalQueue.findIndex(
      i => i.priority === priority
    );
    return highestPriorityIndex;
  }

  peek() {
    const highestPriority = this.getHighestPriority();
    if (highestPriority) {
      const index = this.findIndexByPriority(highestPriority);
      const { element } = this.internalQueue[index];
      return element;
    }
    return null;
  }

  dequeue() {
    const highestPriority = this.getHighestPriority();
    if (highestPriority) {
      const highestPriorityIndex = this.findIndexByPriority(highestPriority);
      const { element: dequeuedElement } = this.internalQueue[
        highestPriorityIndex
      ];
      const newQueue = [
        ...this.internalQueue.slice(0, highestPriorityIndex),
        ...this.internalQueue.slice(highestPriorityIndex + 1)
      ];
      this.internalQueue = newQueue;
      return dequeuedElement;
    }
    return null;
  }

  clear() {
    this.internalQueue = [];
  }
}

module.exports = ArrayBasedImplementation;
