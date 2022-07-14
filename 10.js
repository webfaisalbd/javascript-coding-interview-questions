// 10. How To find prime number in javascript 
let number = 7;
if (number == 1) {
    console.log(`${number} is not prime number.`);
}
else if (number < 1) {
    console.log(`${number} is not prime number.`);
}
else {
    for (let i = 2; i < number; i++) {
        if (number % 2 == 0) {
            var result = (`${number} is not prime number.`);
            break;
        }
        else {
            var result = (`${number} is prime number.`);
            
        }
    }
    console.log(result);
}