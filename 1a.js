// 1a.How To remove duplicate elements/ make unique in array in javascript
const numbers = [2, 5, 9, 6, 2, 7, 8, 9];
const removeDuplicate = numbers.filter((element, index, array) => array.indexOf(element) == index);
console.log('unique arrays: ',removeDuplicate); // unique arrays:  [ 2, 5, 9, 6, 7, 8 ]

