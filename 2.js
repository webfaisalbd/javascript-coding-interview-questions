// 2. How To find max/min in a given array in javascript
// first way of getting max 
var myArray = [1, 5, 6, 2, 3];
var maxNumber = Math.max(...myArray);
console.log('Max number from an array: ', maxNumber);


// first way of getting min 
var minNumber = Math.min(...myArray);
console.log('Min number from an array: ', minNumber);



// second way of getting max
const arrNumber = [11, 22, 88, 22, 99, 88];
const maxFunction = (array) => {
    return array.reduce((previousValue, currentValue) => {
        return previousValue > currentValue ? previousValue : currentValue;
    })
}
console.log('Using reduce method Max number from an array: ', maxFunction(arrNumber));