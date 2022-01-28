//ex3
let n = -3;
let m = -10;

let min = Math.min(n, m)
let minOdd = (Math.floor(min / 2)) * 2 + 1
let max = Math.max(n, m)
let maxOdd = (Math.floor(max / 2)) * 2 - 1
let range = Math.abs(m - n)
let numRangeEven = Math.floor((Math.round(Math.random() * range)) / 2) * 2
console.log('Задание 3'); 
console.log ('n и m =', n,'и', m)
console.log('нечётное случайное число в диапазоне между n и m включительно =', minOdd + numRangeEven)


