// 4. How To find second largest value and remove first largest value in a given array in javascript
const array = [20, 80, 90, 70];
const largestValue = Math.max(...array);
console.log("largestValue:",largestValue);
const index = array.indexOf(largestValue);
console.log("index: ",index);
array.splice(index, 1);
const secondLargestValue = Math.max(array);
console.log("Main Array: ", secondLargestValue);
