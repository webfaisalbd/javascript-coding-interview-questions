// 15. How To marged two arrays in javascript 
const arr1 = ['1', '5', '2', '34'];
const arr2 = ['12', '35', '12', '134'];
// concat 
const margedArray = arr1.concat(arr2);
console.log("First array : ", arr1);
console.log("Second array : ", arr2);
console.log("Marged array : ", margedArray);

const sortedArray = margedArray.sort(function (a, b) {
    return a - b;
})
console.log('Sorted Array : ',sortedArray);