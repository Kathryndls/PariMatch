const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8];

function fun(arr1, arr2, index) {
    arr1.splice(index, 0, arr2);
    return arr1.flat();
}

console.log(fun(arr1, arr2, 2));