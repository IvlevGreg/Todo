let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;
console.log('Задание 1');
console.log('S = ', Math.abs((x1 - x2) * (y1 - y2)));

// ex 2

let a = -13.890123;
let b = 2.891564;
let n = 2;

let aRes = Math.floor((Math.abs(a) - Math.floor(Math.abs(a))) * Math.pow(10, n));
let bRes = Math.floor((Math.abs(b) - Math.floor(Math.abs(b))) * Math.pow(10, n));

console.log('Задание 2');
console.log('дробная часть a =', aRes)
console.log('дробная часть b =', bRes)
console.log('Дробная часть для а больше дробной части b', aRes > bRes);
console.log('Дробная часть для а меньше дробной части b', aRes < bRes);
console.log('Дробная часть для а больше или равна дробной части b', aRes >= bRes);
console.log('Дробная часть для а меньше или равна дробной части b', aRes <= bRes);
console.log('Дробная часть a равна дробной части b', aRes === bRes);
console.log('Дробная часть a не равна дробной части b', aRes != bRes);


