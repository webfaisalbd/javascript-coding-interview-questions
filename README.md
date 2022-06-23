#### 1.How To find duplicate elements in array in javascript
```javascript
// 1.How To find duplicate elements in array in javascript
const numbers = [2, 5, 9, 6, 2, 7, 8, 9];
const duplicate = numbers.filter((element, index, array) => array.indexOf(element) != index);
console.log('duplicate numbers are: ',duplicate);
```


#### 2. How To find max/min in a given array in javascript
```javascript
// first way of getting max 
var myArray = [1, 5, 6, 2, 3];
var maxNumber = Math.max(...myArray);
console.log('Max number from an array: ',maxNumber)
```


```javascript
// first way of getting min 
var minNumber = Math.min(...myArray);
console.log('Min number from an array: ',minNumber);
```


```javascript

```