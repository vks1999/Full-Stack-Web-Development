// Javascript Array Push Method.

// Array push method can do 2 things -  1) It will insert or push a given element in the end of the array.

let array = [1, 2, 5, 9, 10, 45, 61, 101, 50, 22];
// console.log(array);
console.log(array.length);
array.push(49);
console.log(array);

// 2) It will also return the updated length of the array after pushing the element.

console.log(array.push());


// Push method works for 2D array also in this we can add element or an 1D array also.

let a = [
    [21, 23, 52, 45, 61, 46],
    [12, 14, 15, 89, 74, 49],
    [33, 56, 89, 74, 84, 25],
];
console.log(a.length);
a.push([5, 62, 65, 625, 89, 68]);
console.log(a);
console.log(a.length);