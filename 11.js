// 11. How To find numbers of vowel from string in javascript 
let string = 'Arafat';
const vowels = ['a','e','i','o','u'];
var count = 0;
const countVowel = string => {
    for( let letter of string.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }  
    return count;  
}
console.log('Number of vowel is '+countVowel(string)+ ' in '+string);
