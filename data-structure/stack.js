class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value)
        newNode.next = this.top;
        this.top = newNode;
        this.size++
    };

    pop() {
        if (!this.top) return null;
        const popedVal = this.top.value;
        this.top = this.top.next
        this.size--;
        return popedVal
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    // Check if Stack is Empty
    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.top;
        let result = [];
        while (current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.join(" -> "))
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();  // Output: 30 -> 20 -> 10

console.log(stack.pop() + " pop");
console.log(stack.pop());
console.log(stack.peek());
stack.print();


// 
