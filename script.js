function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

function reverseString(str) {
    let result = ""

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}

function reverseNumber(num) {
    let result = 0;
    let rem = 0;

    while (num > 0) {
        rem = num % 10;
        result = rem + (result * 10); // 4
        num = Math.floor(num / 10);
    }
    return result;
}

console.log(reverseNumber(1234))
console.log(reverseString("eninracconsultingpvtltd"))
console.log(pow(5, 4));


let str = "error found in the application"
if (str) {
    console.log("Error found: " + str)
}