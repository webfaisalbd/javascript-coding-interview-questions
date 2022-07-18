// 24. How to find fibonacci sequence in javascript 
let a = 0;
let b = 1;
for (let index = 0; index < 10; index++) {
    let temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
}