// 8. How To find the sum of all elements in a given array in javascript 
const numbers = [1,2,3,4];
const sum = numbers.reduce((pre,cur)=>{
    return pre+cur;
})
console.log("The sum of all elements in a given array is: ",sum);