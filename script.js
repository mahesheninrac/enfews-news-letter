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


function primeNumber(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        count = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 0) {
            console.log(i);
        }
    }
}


