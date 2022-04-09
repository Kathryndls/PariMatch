
const n1 = +prompt('Введите первое число: ', ' ');
const n2 = +prompt('Введите второе число: ', ' ');
const a = [];

if (Number.isInteger(n1) && Number.isInteger(n2)) {
    for (let i = n1; i <= n2; i++){
        a.push(i);
    }

    console.log('Числа заданного диапозона: ' + a);
} else {
    console.error('Ошибка');
}