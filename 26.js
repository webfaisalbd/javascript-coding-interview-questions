// 26. How to Check the No of Occurrence of Character in String in javascript/ count specific input letter in string. 
const string = "faisala";
const letter = 'a';
let count = 0;
for (let index = 0; index < string.length; index++) {
    if(string[index] == letter){
        count++;
    }
}
console.log(`In ${string} occurence of ${letter} is ${count}`);