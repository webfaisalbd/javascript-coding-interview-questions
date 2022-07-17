// 20. How To find union of two arrays in javascript 
const arr1 = [1, 2, 6, 8, 17];
const arr2 = [4, 8, 6, 19, 12, 17];

const totalArray = [...arr1, ...arr2];
const setUnion = [...new Set(totalArray)];
console.log(setUnion);