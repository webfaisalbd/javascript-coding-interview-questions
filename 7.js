// 7. How To find even or odd numbers in a given array in javascript 
const numbers = [1, 2, 3, 8, 9, 12, 16];
const even = numbers.filter((item) => {
    return item % 2 == 0;
})

console.log("Even numbers: ",even);
