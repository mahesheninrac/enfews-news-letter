class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (!this.rear) {
            this.front = this.rear = newNode;

        } else {
            this.rear.next = newNode;
            this.rear = newNode
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) return null;
        const dequeueValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--
        return dequeueValue
    }

    // Peek Front Element
    peek() {
        return this.front ? this.front.value : null;
    }

    // Check if Queue is Empty
    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.value)
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();  // Output: 10 -> 20 -> 30

console.log(queue.dequeue());  // Output: 10
console.log(queue.peek());  // Output: 20
