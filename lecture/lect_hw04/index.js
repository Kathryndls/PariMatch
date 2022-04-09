// global object
// на глобальный обьект у нас попадают функции обьявленные спомощью функ декларатион и у вар

// таким образом мы достучались до всех обьектов на странице 
// Object.prototype.magic = 'magic real';

// можно посмотреть что находится в переменной.
// const fruits = ['Mango', 'Banana'];
// const vegs = ['Tomato', 'Onion'];

// Array.prototype.ArrayLogger = function () {console.log(this)};



// rest - для н кол-во аргументов передаваемые в функцию 
// function logger(...rest) {
//     console.log(rest);
// }
// logger(45, 54, 'tbgfvr', 45);

// function sum(init, ...d) {
//     return d.reduce((acc, current) => acc + current, init);
// }
// console.log(sum(100, 1, 3, 5, 7, 8 ));

// function threeParams(first, second, third, ...other) {
//     console.log('f:', first);
//     console.log('s:', second);
//     console.log('t:', third);
//     console.log('other:', other);
// }
// threeParams('one', 'seven', 'hill', 'four', 'five');


// spred -  оператор расспыления
// распылили массив
// const vegs = ['potato', 'opinion', 'garlic'];
// const anotherVegs = ['beef', 'cabbeg', 'carrot'];

// const finalList = ['horsereddish', ...anotherVegs, ...vegs];
// console.log(finalList);

// // распылили имя
// const myName = 'Vass';
// const spredName = [...myName];
// console.log(spredName);

// cлепливаем строку с массивом
// const carrot = 'carrot';
// let vegs = ['potat', 'onion', 'garlic'];

// vegs = [...vegs, carrot];
// console.log(vegs);

// function sumOfThree(a,b,c) {
//     return a+b+c;
// }

// const digits = [4, 5, 12];
// const nam = 'vass';

// console.log(sumOfThree(...digits));
// console.log(...nam);

// zadacha
// const surf = {
//     style: 'seaside',
//     size: '5bg',
//     volume: '54gbg'
// };

// const surf2 = {...surf, volume: '43kmt'};
// console.log(surf2);
// console.log(surf);


// destructuresation разбиваем что-то на части 
// destructurring массивов
// const names = ['Anna', 'Boris', 'Nick'];
// const [a, b, c, d = 'Nothing'] = names;

// console.log(a, b, c);

// let names = ['Anna', 'Boris', 'Nick', 'rgtef', 'wefsdv'];

// const [a, , c] = names;
// const [a, b, c, ...d] = names;
// console.log(d);


// destructuresation обьекта
// const person = {
//     name: 'Kate',
//     age: 19,
//     address: {
//         city: 'Kiev',
//         country: 'UA'
//     }
// };

// const {name: myName, age, address: city} = person;
// console.log(myName, age, city);

// zadacha 2
// const {name, age} = person;
// function showInfo({name, age}) {
//     console.log(`${name} old ${age}.`);
// }
// showInfo(person);

// practic 1

// function customMathMax(...rest) {
//     let maxValue  = [0];
//     for(let i = 1; i < rest.length; i++) {
//         if(rest[i] > maxValue) {
//             maxValue = rest[i];
//         }
//     }
//     return maxValue;
// }
// console.log(customMathMax(23, 34, -43));

// practic 2

// let a = {
//     a: 34343
// };

// const b = {
//     b: 'wefvd'
// };

// a = {...a, ...b};
// console.log(a);

// practic 3
// function calc(operator, ...rest) {
//     if(operator == '+') {
//         return rest.reduce((acc, curr) => acc + curr, 0);
//     } else if(operator == '*') {
//         return rest.reduce((acc, curr) => acc * curr, 1);
//     } else if(operator == '/') {
//         let initial = rest [0];
//         rest.shift();
//         return rest.reduce((acc, curr) => acc / curr, initial);
//     } else {
//         let initial = rest[0];
//         rest.shift();
//         return rest.reduce((acc, curr) => acc - curr, initial);
//     }
// }

// console.log(calc('-', 100, 50, 20));