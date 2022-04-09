// начинаем тестировать 
function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('Success');
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`);
            }
        }
    };
}

//  у нас есть эта функция и мы хотим чтобы мы её протестировали 
const sum = (a, b) => a + b;
const nativeNull = () => null;
module.exports = {sum, nativeNull};
// expect(sum(42,1)).toBe(83);