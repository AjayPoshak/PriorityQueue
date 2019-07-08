const PriorityQueue = require( './index')

const pq = new PriorityQueue()
pq.queue(21, 6)
pq.queue(22, 7)
pq.queue(29, 2)
pq.queue(11, 4)

console.assert(pq.dequeue() === 29)
console.assert(pq.peek() === 11)
console.assert(pq.dequeue() === 11)
console.assert(pq.dequeue() === 21)
console.assert(pq.dequeue() === 22)
console.assert(pq.dequeue() === null)
console.assert(pq.peek() === null)

pq.clear()

console.assert(pq.dequeue() === null)