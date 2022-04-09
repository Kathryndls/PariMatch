// this = контекст вызова
// console.log(globalThis === this && this === window);

// const person = {
//     myName: 'Vass',
//     greeting: function() {
//         console.log(`Hello, ${this.myName}.`);
//     }
// };
// var hello = person.greeting;
// var myName = 'Nick';

// person.greeting();
// hello();

// function lt() {
//     console.log(this);
// }
// console.log(lt());


// const obj = {};
// obj.lt = lt;
// console.log(obj.lt());


// function showThis() {
//     console.log(this.name);
// }

// const a = {
//     name: 'kate',
//     show: showThis
// };

// const b = {
//     name: 'Mate',
//     show: showThis
// };

// a.show();
// b.show();

// сall - связываем между собой функцию с левым обьектом и выводим, пример: 

// const person = {
//     myName: 'Vass',
//     age: 31, 
//     adrs: 'vfd',
//     showInfo: function() {
//         console.log(this.myName, this.age);
//     }
// };

// const nick = {
//     myName: 'Nick',
//     age: 32
// };
// let showNameInfo = person.showInfo;

// showNameInfo.call(nick);
//  bind = делает привязку фун-ции и какого-то обьекта в переменной, чтобы потом когда-то ее вызвать. А call - сразу связывает и сразуу вызывает.

// const vass = {
//     surname: 'tbrgf'
// };

// function showNameInfo(age, nationality) {
//     console.log(`Vass ${this.surname}, age ${age}, national ${nationality}`);
// }

// showNameInfo.call(vass, 32, 'Ua');

// apply = тоже что и bind, только ожидает массив

const showList = function(list) {
    list.forEach((fruit, idx) => {
        console.log(` ${idx+1}. ${fruit}`);
    });
};

const lists = ['mango', 'bananna'];

showList.call(null, [lists]);
//globalThis - из любой вложенности мы можем достучатся до любого обьекта 