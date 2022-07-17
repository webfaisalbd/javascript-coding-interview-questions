// 18. How To compare two arrays are equal or not in javascript 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 2, 3, 4, 1];
const isArrayLengthSame = arr1.length == arr2.length && arr1.every((element) => {
    if (arr2.indexOf(element) > -1) {
        return element;
    }
})

// output 
if (isArrayLengthSame) {
    console.log("Two Arrays are equal");
}
else {
    console.log("Warning! Two Arrays are NOT equal");
}