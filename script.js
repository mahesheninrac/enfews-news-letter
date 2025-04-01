// function pow(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// function reverseString(str) {
//     let result = ""

//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result;
// }

// let a=2, b=3;
// b = a+b;
// a=b-a;
// b=b-a;
// console.log(a,b);
// function reverseNumber(num) {
//     let result = 0;
//     let rem = 0;

//     while (num > 0) {
//         rem = num % 10;
//         result = rem + (result * 10); // 4
//         num = Math.floor(num / 10);
//     }
//     return result;
// }

// console.log(reverseNumber(1234))
// console.log(reverseString("eninracconsultingpvtltd"))
// console.log(pow(5, 4));
// console.log("reverse");


// function primeNumber(n) {
//     let count = 0;
//     for (let i = 2; i < n; i++) {
//         count = 0;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 count++;
//             }
//         }
//         if (count === 0) {
//             console.log(i);
//         }
//     }
// }



// const isEvenNumber = (num) => num % 2 === 0 ? "Even Number" : "Not even number"
// console.log(isEvenNumber(2))

// const student = {
//   name: "mahesh",
//   age: 23,
//   greet: function () {
//     return `my name is ${this.name} and I am ${this.age} years old.`
//   }
// }

// console.log(student.greet())

// Write a function to reverse an array without using reverse().
// function reverseArr() {
//   let newArr = []
//   let arr = [1, 2, 3, 4, 5]
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
//   }
//   return newArr;
// }

// console.log(reverseArr())

// Implement a function to remove duplicates from an array.
// function removeDuplicates() {
//   let arr = [1, 1, 3, 2, 3, 4, 5];
//   let uniqueArr = [];
//   let obj = {};
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (!obj[arr[i]]) {
//       uniqueArr.push(arr[i])
//       obj[arr[i]] = true
//     }
//   }
//   return uniqueArr;
// }

// console.log(removeDuplicates())

//  find the second larget number
// function secondLargest(arr) {
//     let first = -Infinity, second = -Infinity;

//     for (const num of arr) {
//         if (num > first) {
//             second = first;
//             first = num;
//         } else if (num > second && num !== first) {
//             second = num;
//         }
//     }

//     return second;
// }

// Example
// console.log(secondLargest([ 1, 10, 34, 35, 1]));
// Output: 34


//  ///////////////////////////////////
// Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null // If head === null, the list is empty.
        this.size = 0
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode
        }
        this.size++
    }

    deleteFirst() {
        if (!this.head) return;
        this.head = this.head.next;
        this.size--;
    }

    deleteLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
        } else {
            let prev = null;
            let current = this.head
            while (current.next) {
                prev = current;
                current = current.next
            }
            prev.next = null;
        }
        this.size--;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next
        }
        return false
    }

    reverseList() {
        let prev = null
        let current = this.head;
        while (current) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode
        }
        this.head = prev;
        return prev;
    }

    detectCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next;
            if (slow == fast) {
                console.log("true")
            }
        }
        console.log("false")
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value} -> `;
            current = current.next
        }

        console.log(result + "null")
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.prepend(5);

list.print();  // Output: 5 -> 10 -> 20 -> null
list.reverseList()
list.findMiddle()
list.print();  // Output: 5 -> 10 -> 20 -> null
list.detectCycle();
