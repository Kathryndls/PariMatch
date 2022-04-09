// let logger = function(num) { // ф-ия просто что-то выводит в консоль
//     console.log(num);
// };

// let countDecorator = function(innerFn) {// перебирает каждое значение и что-то с ним делает, например считает сколько раз мы вызвали значение в консоль
//     let count = 0;
//     return (args) => {
//         count += 1;
//         console.log(`Fn was called ${count} timer(s).!`);
//         return innerFn(args);
//     };
// };

// logger = countDecorator(logger);

// logger('qwerty');
// logger('qwertys');
// logger('qwertyssss');


// композиция, берем 2 декоратора 
// let rectangleArea = (length, width) => {
//     return length*width;
// };

// const paramCounter = (coreFn) => {
//     return (...rest) => {
//         if(coreFn.length !== rest.length) {  // если не содержит количеству аргументов как в функции, то
//             throw new Error (`Function has got Two arguments`);
//         } return coreFn(...rest);
//     };
// };

// const checkForNum = (coreFn) => {
//     return (...rest) => {
//         rest.forEach(e => {
//             if (!Number.isInteger(+e)) {
//                 throw new Error(`All arguments must be a number!`);
//             }
//         });
//         return coreFn(...rest);
//     };
// };
// rectangleArea = paramCounter(rectangleArea);
// rectangleArea = checkForNum(rectangleArea);

// console.log(checkForNum(20, "ипиа"));


// ф-я кеширования 
// const btn = document.getElementById('btn');
// let getSomeData = function (request) {
//     let result;
//     console.time(`Elpased`);
//     for(let i = 0; i<=1e9; i++) {
//         result = i;
//     }
//     console.timeEnd(`Elpased`);
//     return {[request]: result};

// };
// btn.onclick = () => getSomeData('efdwf');
// console.log(getSomeData('adss'));


// каррирование 
const mul = a = b => a*b;

const multi = mul(10);
const dbl = mul(2);

console.log(multi(8));
console.log(dbl(3));