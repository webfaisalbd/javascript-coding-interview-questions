// 23. How to convert first letter of string in uppercase in javascript 
const string = 'i love you';
const firstLetterUpper = (string) => {
    var newString = string.split(' ');
    var firstLetter = newString.map((value)=>{
        return value.charAt(0);
    })
     
    return firstLetter;
}
console.log(firstLetterUpper(string));