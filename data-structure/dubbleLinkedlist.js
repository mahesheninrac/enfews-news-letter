class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.size++;
    }


    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.size++;
    }

    deleteFirst() {
        if (!this.head) return;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next
            this.head.prev = null;
        }
        this.size--;
    }

    deleteLast() {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                current = current.next;
            }
        }
        return false
    }

    findmiddle() {
        if (!this.head) return;
        let slow = this.head;
        let fast = this.head;

        if (fast && fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow.value
    }

    deleteAtPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid Position")
            return
        }

        if (position === 0) {
            this.deleteFirst()
            return
        }

        if (position === this.size - 1) {
            this.deleteLast()
            return
        }

        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev

        this.size--
    }

    printReverse() {
        let current = this.tail;
        let result = ""
        while (current) {
            result += `${current.value} ⇄ `;
            current = current.prev
        }
        console.log(result + "null");
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value} ->`;
            current = current.next;
        }
        console.log(result + "null")
    }
}
const list = new DoublyLinkedList()

list.prepend(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.append(10)
list.print()
list.printReverse()
list.deleteAtPosition(8)
list.print();
