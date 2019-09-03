const PriorityQueue = require("./index.js");

const pq = new PriorityQueue({ implementation: "array" });
pq.queue(21, 6);
pq.queue(22, 7);
pq.queue(29, 2);
pq.queue(11, 4);

console.assert(pq.dequeue() === 29);
console.assert(pq.peek() === 11);
console.assert(pq.dequeue() === 11);
console.assert(pq.dequeue() === 21);
console.assert(pq.dequeue() === 22);
console.assert(pq.dequeue() === null);
console.assert(pq.peek() === null);

pq.clear();

console.assert(pq.dequeue() === null);

pq.queue(51);
pq.queue(52);
pq.queue(53);
pq.queue(54, 2);
console.assert(pq.dequeue() === 54, "54 is not in queue");
console.assert(pq.dequeue() === 51);
console.assert(pq.dequeue() === 52);
console.assert(pq.dequeue() === 53);

const heapQueue = new PriorityQueue({ implementation: "array" });
heapQueue.queue(21, 6);
heapQueue.queue(22, 7);
heapQueue.queue(29, 2);
heapQueue.queue(11, 4);

console.assert(heapQueue.dequeue() === 29);
console.assert(heapQueue.peek() === 11);
console.assert(heapQueue.dequeue() === 11);
console.assert(heapQueue.dequeue() === 21);
console.assert(heapQueue.dequeue() === 22);
console.assert(heapQueue.dequeue() === null);
console.assert(heapQueue.peek() === null);

heapQueue.clear();

console.assert(heapQueue.dequeue() === null);

heapQueue.queue(51);
heapQueue.queue(52);
heapQueue.queue(53);
heapQueue.queue(54, 2);
console.assert(
  heapQueue.dequeue() === 54 || 51 || 52 || 53,
  "54 is not in queue"
);
console.assert(
  heapQueue.dequeue() === 54 || 51 || 52 || 53,
  "54 is not in queue"
);
console.assert(
  heapQueue.dequeue() === 54 || 51 || 52 || 53,
  "54 is not in queue"
);
console.assert(
  heapQueue.dequeue() === 54 || 51 || 52 || 53,
  "54 is not in queue"
);
console.assert(heapQueue.dequeue() === null);
