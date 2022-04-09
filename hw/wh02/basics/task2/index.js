
const a = prompt('Введите месяц:', '');

const months = [
    'january', 
    'february', 
    'march', 
    'april',
    'may',
    'june', 
    'july',
    'august',
    'september', 
    'october', 
    'november',
    'december',
];

const reg = /\d{1,12}/;

if(!a.match(reg)) {
    if(months.indexOf(a) + 1) {
        console.log(months.indexOf(a) + 1);
    } else {
        console.log("Месяца с таким названием не существует, повторите ввод"); 
    } 
} else {
    if(months[a - 1]) {
        console.log(months[a - 1]);
    } else {
        console.log("Месяца с таким номером не существует, повторите ввод");
    } 
}  
