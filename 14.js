// 14. How To swap two variable without using the third variable in javascript 
var a = 30;
var b = 15;
console.log("Main array : A is " + a + " and B is " + b);
[a, b] = [b, a];
console.log(`Swap array : A is ${a} and B is ${b}`);
