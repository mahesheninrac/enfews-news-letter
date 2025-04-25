let name = "john";
let age = "24";
let skill = "React Developer";
let country = "India";

console.log(`my name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`My skills is ${skill}`);
console.log(`I live in ${country}`);
console.log(true || true);
console.log(parseInt("99px"));


let username = "admin";
let password = "1234";

if (username == "admn" && password == "1234") {
    console.log("Access Granted ✅")
} else {
    console.log("Access Denied")
}

for (let i = 1; i <= 10; i++) {
    // console.log(i)
}

let number = 2;
while (number <= 20) {
    // console.log(number);
    number += 2;
}

let num = 5;
for (let i = 1; i <= 5; i++) {
    if (i == 3) continue;
    // console.log(i)
}

let numb = 10;
do {
    // console.log(    numb)
    numb++
} while (numb <= 15)

function sayHello() {
    console.log("Hello world")
}

sayHello()

function calculateArea(x, y){
    return x*y;
}

console.log(calculateArea(3,5))

const isEven = (i) => i % 2 === 0 ? "Even" : "Odd"

console.log(isEven(4))


let colors = ["red", "green", "blue"];
