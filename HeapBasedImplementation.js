// Elements in this heap would be <value, key>
class HeapBasedImplementation {
  constructor() {
    this.heap = [];
  }

  findParent(index) {
    if (index === 0) return index;
    return Math.floor((index - 1) / 2);
  }

  getLeft(index) {
    return 2 * index + 1;
  }

  getRight(index) {
    return 2 * index + 2;
  }

  getParent(index) {
    if (index > 0) {
      return Math.floor((index - 1) / 2);
    }
    return 0;
  }

  swap(arr, index1, index2) {
    const argArr = [...arr];
    const temp = argArr[index1];
    argArr[index1] = argArr[index2];
    argArr[index2] = temp;
    return argArr;
  }

  /**
   * This takes O(logn) time.
   * It percolates the element with minimum priority
   * to top of heap.
   */
  minHeapify(arr, index) {
    const left = this.getLeft(index);
    const right = this.getRight(index);
    let smallest = index;

    if (left < arr.length && arr[left].key < arr[index].key) {
      smallest = left;
    }

    if (right < arr.length && arr[right].key < arr[smallest].key) {
      smallest = right;
    }

    if (smallest !== index) {
      arr = this.swap(arr, smallest, index);
      return this.minHeapify(arr, smallest);
    }
    return arr;
  }

  heapExtractMax() {
    const { value } = this.heap.shift();
    this.heap = this.minHeapify(this.heap, 0);
    return value;
  }

  dequeue() {
    if (this.heap.length > 0) {
      return this.heapExtractMax();
    }
    return null;
  }

  heapDecreaseKey(arr, i, element) {
    const { key, value } = element;
    if (arr[i].key < key) {
      throw new Error("new key is bigger than current key");
    }

    arr[i] = { key, value };
    while (i > 0 && arr[this.getParent(i)].key > arr[i].key) {
      arr = this.swap(arr, this.getParent(i), i);
      i = this.getParent(i);
    }
    return arr;
  }

  minHeapInsert(arr, newElement) {
    arr.push({
      value: null,
      key: Infinity
    });
    arr = this.heapDecreaseKey(arr, arr.length - 1, newElement);
    return arr;
  }

  queue(value, key = 5) {
    const newElement = { value, key };
    this.heap = this.minHeapInsert(this.heap, newElement);
  }

  peek() {
    if (this.heap.length > 0) {
      return this.heap[0].value;
    }
    return null;
  }

  clear() {
    this.heap = [];
  }
}

module.exports = HeapBasedImplementation;
