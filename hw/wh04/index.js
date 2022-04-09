// #1
function multiplyBy(multi, ...args) {
    return args.map(e => e * multi);
}
console.log(multiplyBy(0, 2, 11, 130));

////////////////////////////////////////////////
// #2
function flatWhite(multiArray) {
    return multiArray.flat(Infinity);
}
    const multiArray = [
    ['doppio', ['hot'], 'milk'], 
    ['choco', [
        'whiskey', [
        'cinnamon', ['winter'],'candle']
        ]
    ]
    ];

console.log(flatWhite(multiArray));

////////////////////////////////////////////////
// #3
function extendWith(f, s) {

    return {
        ...s,
        ...f
    };
}

const first = {
    one:true,
    ok: true
};

const second = {
    one: 11,
    badRequest: false
};

console.log(extendWith(first, second));

////////////////////////////////////////////////
// #4
function extendWithEndless(...args) {
    const obj = {};

    args.forEach(arg => Object.assign(obj, arg));

    return obj;
}

const one = {
    first: true,
    ok: true
};

const two = {
    first: 101,
    badRequest: false
};

const three = {
    ok: false,
    badRequest: true
};

console.log(extendWithEndless(one, two, three));

////////////////////////////////////////////////
// #5
function Calc(...rest) {
    this.sum = () => rest.reduce((acc, arg) => acc + arg);
    this.mul = () => rest.reduce((acc, arg) => acc * arg);
    this.div = () => rest.reduce((acc, arg) => acc / arg);
    this.sub = () => rest.reduce((acc, arg) => acc - arg);
}

const exp = new Calc(1, 2, 3);
console.log(exp.sum(), exp.mul(), exp.div(), exp.sub());