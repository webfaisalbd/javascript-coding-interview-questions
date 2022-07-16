// 15. How To marged two arrays in javascript 
const arr1 = ['1', '5', '2', '34'];
const arr2 = ['12', '35', '12', '134'];
// concat 
const margedArray = arr1.concat(arr2);
console.log("First array : ", arr1);
console.log("Second array : ", arr2);
console.log("Marged array : ", margedArray);

// sort 
// ascending order, small to large
const sortedArray = margedArray.sort(function (a, b) {
    return a - b;
})
console.log('Sorted Array, Ascending order : ', sortedArray);

// marged array using spread operator 
const margedUsingSpread = [...arr1, ...arr2];
console.log("marged Using Spread Operator : ", margedUsingSpread);

// ascending order, large to small
const sortedArray2 = margedArray.sort(function (a, b) {
    return b - a;
})
console.log('Sorted Array2, Descending order : ', sortedArray2);
