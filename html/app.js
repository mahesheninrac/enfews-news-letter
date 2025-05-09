// function reverseString(str) {
//     let revStr = str.split("").reverse().join("")
//     console.log(revStr)
//    return str === revStr ? true : false
// }

// const rstring = reverseString("eninrac")
// console.log(rstring);


// function countCharacters(string) {
//     let obj = {};

//     let str = string
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (char === " ") {
//             continue
//         }
//         let found = false;

//         for (let key in obj) {
//             if (key === char) {
//                 obj[key] += 1;
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             obj[char] = 1
//         }
//     }
//     return obj
// }

// const countKeys = countCharacters("hellofrom mahesh")
// console.log(countKeys)

