let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [6, 7, 8, 9, 10];
let arr3: number[] = [11, 22, 33, ...arr1, ...arr2];
console.log(arr3);

let obj1 = { rollNo: 1, name: "Swaraj" };
let obj2 = { rollNo: 2, name: "Mayuresh" };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
