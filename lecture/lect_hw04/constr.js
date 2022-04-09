// functions constructor, closure
// function sum(a) {
//     // return (b) => (c) => console.log(a+b+c);
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         };
//     };
// }
// console.log(sum(23)(3)(34.5));
// всплытие - 5 мин 

// конструктор: пишется с большой буквы, спомощью new, всегда получаем обьект

// const MusicTrack = function(title) {
//     this.tiitle = title,
//     this.year = '1972',
//     this.album = 'Dare!',
//     this.artist = 'I\`m',
//     this.showInfo = function() {
//         console.log(`
//             Music track: ${this.title}
//             Album: ${this.album}
//             Year:${this.year}
//             Artist: ${this.artist}`);
//     };
// };

// const seconds = new MusicTrack('Seconds');
// console.log(seconds);

// sadacha 
// const obj = {};

// function A(digit) {
//     this.digit = digit;
//     return obj;
// }

// function B(digit) {
//     this.digit = digit;
//     return obj;
// }

// const a = new A(234);
// const b = new B(234);

// console.log(a === b);

// sadacha 
function Calc(...rest) {
    this.sum = () => rest.reduce((acc, arg) => acc + arg);
    this.mul = () => rest.reduce((acc, arg) => acc * arg);
    this.div = () => rest.reduce((acc, arg) => acc / arg);
    this.sub = () => rest.reduce((acc, arg) => acc - arg);
}

const exp = new Calc(1, 2, 3);
console.log(exp.sum(), exp.mul(), exp.div(), exp.sub());
// sadacha 
// function Calc(a, b) {
//     this.a = a;
//     this.b = b;
//     this.sum = () => a+b;
//     this.mul = () => a*b;
//     this.div = () => a/b;
//     this.sub = () => a-b;
// }

// Calc.prototype.div = function() {
//     return +((this.a / this.b).toFixed(2));
// };

// Calc.prototype.sub = function() {
//     return this.a - this.b;
// };

// const exp = new Calc(234, 11);
// console.log(exp.sum(), exp.mul(), exp.div(), exp.sub());


// sadacha 
// function extendWithEndless(...rest) {
//     const obj  = {};

//     rest.forEach(element => {
//         Object.assign(obj, element);
//     });
//     console.log(obj);

// }
// extendWithEndless({first: true, ok: true}, {first: 101, badRequest: false}, {ok: false, badRequest: true});
//{first: 101, ok: false, badRequest: true}