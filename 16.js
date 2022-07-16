// 16. How To find factor of a integer in javascript 
const num = 27;
console.log("Factor of " + num + ' is : ');
for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}