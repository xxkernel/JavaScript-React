'use strict';

const now = new Date('2023-06-27');
// new Date.parse('2023-06-27');  the same with the first one

console.log(now);
console.log(now.setHours(18));
console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMinutes());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); 

let start = new Date();

for(let i = 0;i<10000000;i++){
    let some = i ** 3;
}

let end = new Date();

console.log(`Time is ${end-start}m`);