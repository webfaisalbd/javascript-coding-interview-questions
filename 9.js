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