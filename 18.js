// 18. How To compare two arrays are equal or not in javascript 
const arr1 = [1, 2, 3, 4, 5, 6, 2];
const arr2 = [5, 2, 3, 4, 1, 1, 6];
arr1.sort();
arr2.sort();
console.log(arr1);
console.log(arr2);
const isArrayLengthSame = arr1.length == arr2.length && arr1.every((element) => {
    if (arr2.indexOf(element) > -1) {
        return (element);
    }
})

// output 
if (isArrayLengthSame) {
    console.log("Two Arrays are equal");
}
else {
    console.log("Warning! Two Arrays are NOT equal");
}