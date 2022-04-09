
const string = 'ECMAScript 2015 (6th Edition, ECMA-262)';

function number(str) {
    return [
        str.replace(/\D+/g,''),  
        str.match(/([A-Z])/g).join('')
    ];
}
console.log(number(string));

