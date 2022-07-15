// 12. How To reverse a string in javascript 
// array k reverse :
var myString = ['A','h','m','e','d'];
console.log("Array k reverse: " + myString.reverse());


// string k reverse korar kono build in method nai. kintu array k reverse korar build in method ase.
// 3 steps:  
// firstly, string k array te convert kore,
// then, array k reverse korbo,
// then, array k join kore dibo.
var string = "Faisal";
const reverseString = (str) => {
    var splitStringIntoArray = str.split('');
    splitStringIntoArray.reverse();
    var arrayJoinAsString = splitStringIntoArray.join(''); 
    return arrayJoinAsString; 
}

console.log('Main string is : ' + string + ' and Reverse string is : ' +reverseString(string));