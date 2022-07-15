// 13. How To find palindrome in javascript 
var string = "aba";
string = string.toLocaleLowerCase();
const findPalindrome = (str) => {
    var reverseString = str.split('').reverse().join('');
    if(str == reverseString){
        return `${str} is palindrome`;
    }
    else {
        return `${str} is not palindrome`;
    }
}
console.log(findPalindrome(string));