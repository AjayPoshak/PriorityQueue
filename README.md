# PriorityQueue

[![Build Status](https://travis-ci.org/AjayPoshak/PriorityQueue.svg?branch=master)](https://travis-ci.org/AjayPoshak/PriorityQueue)

Array based Priority Queue implemented in JS.

Highest Priority - 1, Lowest Priority - 10

## Usage
```javascript
const PriorityQueue = require( './PriorityQueue')

const pQueue = new PriorityQueue()

// Add elements to queue
pQueue.queue(21, 6) // elements = 21 and priority is 6
pQueue.queue(22) // default priority = 5
pQueue.queue(29, 7)
pQueue.queue(11, 9) // default priority = 5

// Remove elements from queue
pQueue.dequeue() // Output => 21 [element with highest priority]
```
