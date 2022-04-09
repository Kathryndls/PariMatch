const cache = {};

function fib(num) {
let value;

if (num in cache) {
    value = cache[num];
} else {
    if (num === 0 || num === 1) {
    value = num;
    } else {
    value = fib(num - 1) + fib(num - 2);
    }
    
    cache[num] = value;
}

return value;
}

console.log(fib(2));
console.log(cache);
console.log(fib(7));
console.log(cache);