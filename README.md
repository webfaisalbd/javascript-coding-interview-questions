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
// second way of getting max
const arrNumber = [11, 22, 88, 22, 99, 88];
const maxFunction = (array) => {
    return array.reduce((previousValue, currentValue) => {
        return previousValue > currentValue ? previousValue : currentValue;
    })
}
console.log('Using reduce method Max number from an array: ', maxFunction(arrNumber));

```


```javascript
// second way of getting min
const arrNumber2 = [11, 22, 88, 22, 99, 88];
const minFunction = (array) => {
    return array.reduce((previousValue, currentValue) => {
        return previousValue < currentValue ? previousValue : currentValue;
    })
}
console.log('Using reduce method Min number from an array: ', minFunction(arrNumber2));
```


```javascript
// third way of getting max
const arrNumber3 = [11, 22, 88, 22, 99, 88];
const maxOutput = arrNumber3.reduce((pre,cur)=> {
    return pre > cur ? pre : cur;
})
console.log("Using reduce method making simple, Max number from an array: ",maxOutput);

```


```javascript
// third way of getting min
const arrNumber4 = [11, 22, 88, 22, 99, 88];
const minOutput = arrNumber4.reduce((pre,cur)=> {
    return pre < cur ? pre : cur;
})
console.log("Using reduce method making simple, Min number from an array: ",minOutput);


```


#### 4. How To find second largest value and remove first largest value in a given array in javascript
```javascript

```


#### 7. How To find even or odd numbers in a given array in javascript
```javascript
// 7. How To find even or odd numbers in a given array in javascript 
const numbers = [1, 2, 3, 8, 9, 12, 16];
const even = numbers.filter((item) => {
    return item % 2 == 0;
})
const odd = numbers.filter((item) => {
    return item % 2 ==! 0;
})
console.log("Even numbers: ",even);
console.log("Odd numbers: ",odd);
```


#### 8. How To find the sum of all elements in a given array in javascript
```javascript
// 8. How To find the sum of all elements in a given array in javascript 
const numbers = [1,2,3,4];
const sum = numbers.reduce((pre,cur)=>{
    return pre+cur;
})
console.log("The sum of all elements in a given array is: ",sum);
```


#### 9. How To find the factorial of a  given number in javascript
```javascript
// 9. How To find the factorial of a  given number in javascript
const input = 5;
var fact = 1;
if (input < 0) {
    console.log(`Factorial of ${input} is not possible.`);
}
else {
    for (let i = 1; i <= input; i++) {
        fact = fact * i;
    }
    console.log(`Factorial of ${input} is ${fact}`);
}
```


#### 10. How To ............. in javascript
```javascript

```
