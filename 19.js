// 19. How To find intersection of two arrays in javascript
const arr1 = [2, 9, 6, 8, 4, 4, 4];
const arr2 = [4, 8, 6, 9, 12];

const intersection = arr1.filter((element)=> {
    return arr2.includes(element);
})
// all value that are belongs to this two array 
console.log(intersection);

// now same value remove
// set return like object 
// set { } diye output dey. array te dey na.
// tai set ta k array er vitor neya hoyese. 
const set = [...new Set(intersection)]

// getting unique values 
console.log(set);
