// 25. How to print LEFT TRIANGLE pattern, RIGHT TRIANGLE pattern, PYRAMID pattern and DIAMOND SHAPE pattern in javascript 

// LEFT TRIANGLE pattern
let string = '';
for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
        string += "*";
    }
    string += '\n';
}
console.log(string);


// RIGHT TRIANGLE pattern

