// Javascript Array Pop Method.

// Array pop method can do 2 things -  1) It will remove/delete or pop the element from the end of the array.

let array = [21, 32, 56, 10, 1, 6, 89];
// console.log(array);
// array.pop();  // 89 will be removed from the array after using pop.
console.log(array);

// 2) It will also return the deleted/removed element of the array after using pop method.

console.log(array.pop());

// Pop method works for 2D array also in this we can remove the last row.

let a = [
    [21, 23, 52, 45, 61, 46],
    [12, 14, 15, 89, 74, 49],
    [33, 56, 89, 74, 84, 25],
];
// console.log(a);
(a.pop());
console.log(a);
// console.log(a.pop());
