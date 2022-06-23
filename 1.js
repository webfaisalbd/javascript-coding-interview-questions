// 1.How To find duplicate elements in array in javascript
const numbers = [2, 5, 9, 6, 2, 7, 8, 9];
const duplicate = numbers.filter((element, index, array) => array.indexOf(element) != index);
console.log('duplicate numbers are: ',duplicate);